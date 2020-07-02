var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({id:Number, name:String, author:String, page:Number, year:Number, isComplete:Boolean, isTrash:Boolean});
var BookModel = mongoose.model('BookModel', BookSchema, 'book');


module.exports = BookModel;