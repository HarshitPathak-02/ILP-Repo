using Microsoft.AspNetCore.Mvc;
using System.Numerics;
using WebApplication1.Managers;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BooksController : Controller
    {
        IBookManager _bookManager;
        public BooksController(IBookManager bookManager)
        {
            _bookManager = bookManager;
        }

        [HttpGet("/books")]
        public IActionResult GetAllBooks()
        {
            var response = _bookManager.GetAllBooks();
            return Ok(response);
        }

        [HttpGet("/book")]
        public IActionResult GetBookById(int id)
        {
            var response = _bookManager.GetBookById(id);
            return Ok(response);
        }

        [HttpPost("/book/add")]
        public IActionResult AddBook([FromBody] Book book)
        {
            var res = _bookManager.AddBook(book);
            return Ok(res);
        }

        [HttpPut("/book/update")]
        public IActionResult UpdateBook(int id, [FromBody] UpdateBody updateBody)
        {
            var res= _bookManager.UpdateBook(id, updateBody);
            return Ok(res);
        }

        [HttpDelete("/book/delete")]
        public IActionResult DeleteBook(int id)
        {
            var res = _bookManager.DeleteBook(id);
            return Ok(res);
        }
    }
}

public class Book
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Author { get; set; }
    public int YearOfPublication { get; set; }

}

public class UpdateBody
{
    public string Title { get; set; }
    public string Author { get; set; }
    public int YearOfPublication { get; set; }
}