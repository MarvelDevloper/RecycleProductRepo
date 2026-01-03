/* eslint-disable no-undef */
const Product = require('../model/productModel')

const productController = {
    addProduct: async (req, res) => {
        try {
            const { productname, productprice, status, description, category } = req.body
            const location = req.userlocation
            const userId = req.userid

            console.log(location)
            console.log(userId)
            const imageBase64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

            if (!productname || !productprice || !status || !description || !req.file || !category) {
                return res.status(400).json({ msg: "all field required" })
            }

            const existingProduct = await Product.findOne({ productname, userId });
            if (existingProduct) {
                return res.status(400).json({ msg: "Product already exists!" });
            }


            const product = new Product({
                productname: productname,
                productprice: productprice,
                description: description,
                status: status,
                userlocation: location,
                category: category,
                userId: userId,
                photo: imageBase64,
            })

            await product.save()
            return res.status(200).json({ msg: "Product Added Successfully!" })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "internal server error!" })
        }
    },

    getAllproduct:async(req,res)=>{
        try {
            const products=await Product.find({})

           const actual_products=products.filter((product)=>{
                return product.status!='claim'
            })

            if(!actual_products){
                return res.status(400).json({msg:"No Product Found!"})
            }
            return res.status(200).json({status:true,result:actual_products})
        } catch (error) {
            console.log(error)
            return res.status(500).json({msg:"internal server error"})
        }
    }
}

module.exports = productController