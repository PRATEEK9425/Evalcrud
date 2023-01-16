const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://Prateeksoni:masai@cluster0.4fmvveo.mongodb.net/SocialMedia?retryWrites=true&w=majority")

module.exports={
    connection
}