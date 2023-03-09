import mongoose from 'mongoose'

const Product = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    supplierID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Suppliers',
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Products', Product)
