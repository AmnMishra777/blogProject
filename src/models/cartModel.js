const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const cartSchema = new mongoose.Schema(

{
    userId: { type: ObjectId, required: true, unique: true, ref: "User"},
    items: [{
        productId: {type: ObjectId, ref:"Products" , required : true},
        quantity: {type: Number, required: true, min: 1}
      }],
    totalPrice: {type: Number},
    totalItems: {type: Number },
    },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);