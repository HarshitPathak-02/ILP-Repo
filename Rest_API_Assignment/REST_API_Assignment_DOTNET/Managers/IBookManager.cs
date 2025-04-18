namespace WebApplication1.Managers
{
    public interface IBookManager
    {
        public string GetBookById(int id);
        public List<Book> GetAllBooks();
        public string AddBook(Book book);
        public string UpdateBook(int id, UpdateBody updateBody);
        public string DeleteBook(int id);
    }
}
