const { model } = require("mongoose");
const BookModel = require("../model/book.model");

module.exports = {
    show: async (req, res) => {
        const data = await BookModel.find();
        console.log(data);
        
        res.send(data)
    }
}