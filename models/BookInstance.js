const mongoose = require('mongoose')

const BookInstanceSchema = new Schema({
   book: Book,
   imprint: String,
   status: Enumerator,
   due_back: Date,

   url: String
  });

const BookInstance = mongoose.model("url", BookInstanceSchema);