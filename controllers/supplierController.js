import Supplier from '../models/Supplier.js'

export const getSuppliers = async (req, res) => {
  try{
    const suppliers = await Supplier.find()
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const saveSupplier = async (req, res) => {
  const supplier = new Supplier(req.body)
  try {
    const savedSupplier = await supplier.save();
    res.status(201).json(savedSupplier)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}