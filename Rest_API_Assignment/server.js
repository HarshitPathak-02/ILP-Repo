const express = require('express')
const books = require("./routes/book")

const app = express();

app.use(express.json())


app.listen(8000,(req,res)=>{
    console.log("server is listening to port.");
})

app.use("/books",books)