const express = require("express");
const {model} = require("mongoose");
const BookController = require("../controller/book.controller");
const BookRouter = express.Router();
BookRouter.get("/",BookController.show);
module.exports = BookRouter;