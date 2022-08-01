const userModel = require("../models/userModel");
const productModel = require("../models/productModel");
const aws = require("aws-sdk");
const uploadFile = require("../middleware/aws");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;


const createCart = async function (req, res) {
    try {
        let data = req.body;
        let userId = req.params
        let productId = req.body

        const findUser = await userModel.findById(userId);
        if (!findUser) {
            return res.status(404).send({
                status: false,
                message: "User not found"
            })
        };

        const findProduct = await productModel.findById(productId);
        if (!findProduct) {
            return res.status(404).send({
                status: false,
                message: "Product not found"
            })
        };
      //  items: [{
        //     productId: {type: ObjectId, ref:"Products" , required : true},
        //     quantity: {type: Number, required: true, min: 1}
        //   }],
        // totalPrice: {type: Number},
        // totalItems: {type: Number },

        let sumtotal= count(items.productId)

        totalItems= sumtotal

const v= {userId: JSON.stringify(req.params), items:[{productId:req.body}], totalItems: sumtotal} 


        const cartCreation = await cartModel.create(v);
        return res.status(201).send({
            status: true,
            message: "Cart created successfully",
            data: cartCreation,
        });
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message,
        });
    }
};
// Get cart id in request body.
// Get productId in request body.
// Make sure that cart exist.
// Add a product(s) for a user in the cart.
// Make sure the userId in params and in JWT token match.
// Make sure the user exist
// Make sure the product(s) are valid and not deleted.
// Get product(s) details in response body.

module.exports.createCart = createCart