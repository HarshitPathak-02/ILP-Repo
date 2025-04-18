const express = require("express")
const router = express.Router()

const {getAllBooks, uploadBook, getBookById, updateBook, deleteBook} = require("../controllers/book")

router
  .route("/")
  .get(getAllBooks)
  .post(uploadBook)

router.
  route("/:id")
  .get(getBookById)
  .put(updateBook)
  .delete(deleteBook)

module.exports = router;