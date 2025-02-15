import mongoose from "mongoose";
const PortfolioSchema=new mongoose.Schema({

title:{type:String,required:true},
description:{type:String,required:true},
imageUrl:{type:String,required:true},
createdAt:{type:Date,default:Date.now}

})
export default mongoose.models.Portfolio || mongoose.model('Portfolio', PortfolioSchema);
