using System.Xml.Linq;

namespace WebApplication1.Managers
{
    
    public class BookManager:IBookManager
    {

        public static List<Book> allBooks = new List<Book>();
        public string GetBookById(int id)
        {
            Book book = new Book();

            foreach (var item in allBooks)
            {
                if(item.Id == id)
                {
                    return $"Id: {item.Id}\nTitle: {item.Title}\nAuthor: {item.Author}\n Year of Publication: {item.YearOfPublication}";
                }
                break;
            }

            return "Book with your given Id does not exist";

        }

        public List<Book> GetAllBooks()
        {
            return allBooks;
        }

        public string AddBook(Book book)
        {
            Book newBook = new Book();
            newBook.Id = book.Id;
            newBook.Title = book.Title;
            newBook.Author = book.Author;
            newBook.YearOfPublication = book.YearOfPublication;

            allBooks.Add(newBook);

            return "Book Added";
        }

        public string UpdateBook(int id, UpdateBody updateBody)
        { 
            foreach (Book book in allBooks) {
                if (book.Id == id) { 
                    book.Title = updateBody.Title;
                    book.Author = updateBody.Author;    
                    book.YearOfPublication= updateBody.YearOfPublication;
                    return "Book Updated";
                }
            }

            return "Book with your provided Id does not exists";
        }

        public string DeleteBook(int id)
        {
            foreach (var item in allBooks)
            {
                if (item.Id == id) { 
                    allBooks.Remove(item);
                    return "Book Deleted";

                }
            }
            return "Book with your provided Id does not exists";
        }
    }
}
