const mongoose= require("mongoose");

const BookScheme = new mongoose.Schema({
    title: String,
    author:String,
    description: String,
    release_year: Number,
    genre: String, 
})

const Book = mongoose.model('Book',BookScheme)

module.exports = Book