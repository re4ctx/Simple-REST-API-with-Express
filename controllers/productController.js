import Product from '../models/Product.js'

// export const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find()
//     res.json(products)
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('supplierID', 'name address');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveProduct = async (req, res) => {
  const product = new Product(req.body)
  try {
    const savedProduct = await product.save()
    res.status(201).json(savedProduct)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const updateProduct = async (req, res) => {
  const cekId = await Product.findById(req.params.id)
  if (!cekId) return res.status(404).json({ message: 'Tai tidak ditemukan!' })
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body },
    )
    res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const getProductsById = async (req, res) => {
  const cekId = await Product.findById(req.params.id)
  if (!cekId) return res.status(404).json({ message: 'Tai tidak ditemukan!' })
  try {
    const product = await Product.findById(req.params.id)
    res.json(product)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const deleteProduct = async (req, res) => {
  const cekId = await Product.findById(req.params.id)
  if (!cekId) return res.status(404).json({ message: 'Tai tidak ditemukan!' })
  try {
    const deletedProduct = await Product.deleteOne(req.params.id)
    res.status(200).json(deletedProduct)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
