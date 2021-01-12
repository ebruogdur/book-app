var mongoose =require('mongoose');
var category =require('./category.model');


var bookSchema =mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    price:{type:Number,required:true},
    stock:{type:Number,required:true},
    picture:{type:String,required:true},
    created:{type:Date,default:()=>{return new Date()}},
    categoryBy:{type:mongoose.Schema.Types.ObjectId,ref:"category"}

})
module.exports =mongoose.model("book",bookSchema);