/* eslint-disable no-undef */
// const ClaimProduct = require("../model/claimProductModel");
// const Product = require("../model/productModel");

// const claimProductController = {

//     claimProduct: async (req, res) => {
//         try {
//             const { productId } = req.body;
//             const userId = req.userid;
//             const email=req.useremail

//             // nodemailer logic


//             console.log(email)

//             if (!productId) return res.status(400).json({ msg: "Product ID required" });

//             const product = await Product.findById(productId);
//             if (!product) return res.status(404).json({ msg: "Product not found" });

//             const alreadyClaimed = await ClaimProduct.findOne({ productId });

//             if (alreadyClaimed) return res.status(400).json({ msg: "Product already claimed" });

//             const claim = new ClaimProduct({
//                 productId,
//                 claimedBy: userId,
//             });

//             await claim.save();

//             product.status = "claim";
//             await product.save();

//             return res.status(200).json({ msg: "Product claimed successfully!" });

//         } catch (error) {
//             console.error(error);
//             return res.status(500).json({ msg: "Internal server error" });
//         }
//     },


//    getMyClaims: async (req, res) => {
//     try {
//         const userId = req.userid;
//         const claims = await ClaimProduct.find({ claimedBy: userId })
//             .populate("productId")    
//             .populate("claimedBy", "name email");
//         return res.status(200).json(claims);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ msg: "Internal server error" });
//     }
// }

// };
// module.exports = claimProductController;



 /* eslint-disable no-undef */

// const ClaimProduct = require("../model/claimProductModel");
// const Product = require("../model/productModel");
// const nodemailer = require("nodemailer"); 
// const User=require('../model/userModel')

// const claimProductController = {

//     claimProduct: async (req, res) => {
//         try {
//             const { productId } = req.body;

//             const userId = req.userid;
//             const email = req.useremail;

//             const ProductBuyerPerson=await User.findOne({email:email})

//             console.log(email);
//             const productOwner=await Product.findById(productId)
//             console.log(productOwner.userId)

//             if(productOwner){
//                   const transporter = nodemailer.createTransport({
//                 service: "gmail",
//                 auth: {
//                     user: process.env.EMAIL_USER, // your Gmail
//                     pass: process.env.EMAIL_PASS, // App Password
//                 },
//             });

//             const mailOptions = {
//                 from: `"Your Product Claim By User..." <${process.env.EMAIL_USER}>`,
//                 to: email, // send to user
//                 subject: "Product Booked Successfully!",
//                 text: `Your Product has successfully Booked by : ${ProductBuyerPerson.name} and Owner Easily Cotact your Thanks for Choosing us `,
//                 html: `<h3>You have successfully claimed the product: ${ProductBuyerPerson.email}</h3>`,
//             };

//             transporter.sendMail(mailOptions, (err, info) => {
//                 if (err) {
//                     console.error("Email not sent:", err);
//                 } else {
//                     console.log("Email sent:", info.response);
//                 }
//             });
//             }
           

//             if (!productId) return res.status(400).json({ msg: "Product ID required" });

//             const product = await Product.findById(productId);
//             if (!product) return res.status(404).json({ msg: "Product not found" });

//             const alreadyClaimed = await ClaimProduct.findOne({ productId });

//             if (alreadyClaimed) return res.status(400).json({ msg: "Product already claimed" });

//             const claim = new ClaimProduct({
//                 productId,
//                 claimedBy: userId,
//             });

//             await claim.save();

//             product.status = "claim";
//             await product.save();

//             // ===== Nodemailer logic added here =====
//             const transporter = nodemailer.createTransport({
//                 service: "gmail",
//                 auth: {
//                     user: process.env.EMAIL_USER, // your Gmail
//                     pass: process.env.EMAIL_PASS, // App Password
//                 },
//             });

//             const mailOptions = {
//                 from: `"Product Claim" <${process.env.EMAIL_USER}>`,
//                 to: email, // send to user
//                 subject: "Product Booked Successfully!",
//                 text: `You have successfully Book the product: ${product.name} and Owner Easily Cotact your Thanks for Choosing us `,
//                 html: `<h3>You have successfully claimed the product: ${product.name}</h3>`,
//             };

//             transporter.sendMail(mailOptions, (err, info) => {
//                 if (err) {
//                     console.error("Email not sent:", err);
//                 } else {
//                     console.log("Email sent:", info.response);
//                 }
//             });
//             // ===== End of Nodemailer logic =====

//             return res.status(200).json({ msg: "Product claimed successfully!" });

//         } catch (error) {
//             console.error(error);
//             return res.status(500).json({ msg: "Internal server error" });
//         }
//     },

//     getMyClaims: async (req, res) => {
//         try {
//             const userId = req.userid;
//             const claims = await ClaimProduct.find({ claimedBy: userId })
//                 .populate("productId")      // product details
//                 .populate("claimedBy", "name email"); // only name and email
//             return res.status(200).json(claims);
//         } catch (error) {
//             console.error(error);
//             return res.status(500).json({ msg: "Internal server error" });
//         }
//     }

// };

// module.exports = claimProductController;




/* eslint-disable no-undef */
const ClaimProduct = require("../model/claimProductModel");
const Product = require("../model/productModel");
const User = require("../model/userModel");
const nodemailer = require("nodemailer");

const claimProductController = {

  claimProduct: async (req, res) => {
    try {
      const { productId } = req.body;
      const userId = req.userid;
      const email = req.useremail;

      if (!productId) {
        return res.status(400).json({ msg: "Product ID required" });
      }

      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ msg: "Product not found" });
      }

      if (product.status === "claim") {
        return res.status(400).json({ msg: "Product already claimed" });
      }

      const buyer = await User.findById(userId);
      if (!buyer) {
        return res.status(404).json({ msg: "User not found" });
      }

      // Save claim
      await ClaimProduct.create({
        productId,
        claimedBy: userId,
      });

      // Update product status
      product.status = "claim";
      await product.save();

      // ================= MAIL =================
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Product Claim" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Product Booked Successfully!",
        html: `
          <p>Hi ${buyer.name},</p>
          <p>Your product <b>${product.productname}</b> has been successfully booked.</p>
          <p>You can now contact the owner to proceed.</p>
        `,
      });

      return res.status(200).json({ msg: "Product claimed successfully!" });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  },

  getMyClaims: async (req, res) => {
    try {
      const userId = req.userid;
      const claims = await ClaimProduct.find({ claimedBy: userId })
        .populate("productId")
        .populate("claimedBy", "name email");

      return res.status(200).json(claims);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  },
};

module.exports = claimProductController;
