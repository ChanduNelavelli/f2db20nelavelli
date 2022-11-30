const mongoose = require("mongoose") 
const pizzaSchema = mongoose.Schema({ 
 size: String, 
 crust: String,
 count:{
    type:Number,
    min:1,
    max:10
 }
}) 
 
module.exports = mongoose.model("Pizza", pizzaSchema)