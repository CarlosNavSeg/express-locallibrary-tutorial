const mongoose = require('mongoose')

const BookSchema = new Schema({
    title: String,
    author: Author[1],
    summary: String,
    ISBN: String,
    genre: Genre[1],
    url: String

  });

const Book = mongoose.model("Book", BookSchema)