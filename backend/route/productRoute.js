/* eslint-disable no-undef */
const express=require('express')
const productController = require('../controller/productController')
const authToken = require('../controller/authToken')
const multer = require('multer')
const productRouter=express.Router()

const storage = multer.memoryStorage()
const upload = multer({ storage: storage }) 

productRouter.post('/add',upload.single('photo'),authToken.verifyToken,productController.addProduct)
productRouter.get('/get',authToken.verifyToken,productController.getAllproduct)

// productRouter.post('/update')

module.exports=productRouter