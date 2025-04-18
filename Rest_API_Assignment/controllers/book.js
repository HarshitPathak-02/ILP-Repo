module.exports.getAllBooks = async (req,res)=>{
    try {
        // logic for fetching all books from the db

        res.json({code:200,msg:'Books are fetched'})
    } catch(e){
        res.json({code:500,error:e})
    }
}

module.exports.uploadBook = async (req,res)=>{
    try {

        const {id,title, author, yearOfPublication} = req.body;

        console.log(`Book is added,\nID: ${id}\nAuthor: ${author}\nTitle: ${title}\nYear of Publication: ${yearOfPublication}`);


        // logic for uploading book to db

        res.json({code:200,msg:'Books are added'})
    } catch(e){
        res.json({code:500,error:e.message})
    }
}

module.exports.getBookById = async (req,res)=>{
    try {

        const { id } = req.params;

        // logic for fetching book by ID from the db

        res.json({code:200,msg:`Book is fetched and the id is ${id}`})
    } catch(e){
        res.json({code:500,error:e})
    }
}

module.exports.updateBook = async (req,res)=>{
    try {

        const { id } = req.params;

        // logic for updating book in db

        res.json({code:200,msg:'Book is updated.'})
    } catch(e){
        res.json({code:500,error:e})
    }
}

module.exports.deleteBook = async (req,res)=>{
    try {

        const { id } = req.params;

        // logic for deleting book from the db

        res.json({code:200,msg:'Book is deleted'})
    } catch(e){
        res.json({code:500,error:e})
    }
}