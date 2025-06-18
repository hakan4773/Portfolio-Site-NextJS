import mongoose from 'mongoose';

const CertificateSchema=new mongoose.Schema({
title:{type:String,required:true},
description:{type:String,required:true},
imageUrl:{type:String,required:true},
link:{type:String,required:true},
createdAt:{
    type:Date,
    default:Date.now
}
})
export default mongoose.models.Certificate || mongoose.model('Certificate', CertificateSchema);