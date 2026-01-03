/* eslint-disable no-undef */
const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    productname:{
        type:String,
        required:true,
    },
    productprice:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['claim','not claim'],
        default:'not claim',
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    photo:{
        type:String,
        default:'' //store the base64 photo
    },
    userlocation:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Product", productSchema);
