/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose");
const userRoute = require("./route/userRoute");
require('dotenv').config()
const cookie=require('cookie-parser');
const productRouter = require("./route/productRoute");
const claimRouter = require("./route/claimproductRoute");
const app = express();

app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))

app.use(cookie())
mongoose.connect(process.env.DB_URL).then(()=>{
  console.log("DB Connected")
}).catch(()=>{
  console.log("Failed to Connect DB")
})


app.use(express.json());

app.use('/user',userRoute)
app.use('/product',productRouter)

app.use("/product",claimRouter);


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});






