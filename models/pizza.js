const mongoose = require("mongoose") 
const pizzaSchema = mongoose.Schema({ 
 size: String, 
 crust: String,
 count: Number
}) 
 
module.exports = mongoose.model("Pizza", pizzaSchema)