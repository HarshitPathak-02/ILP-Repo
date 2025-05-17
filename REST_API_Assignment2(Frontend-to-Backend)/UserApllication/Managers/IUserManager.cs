namespace UserApllication.Managers
{
    public interface IUserManager
    {
        User GetUserById(int id);
        List<User> GetAllUsers();
        string CreateUser(User book);
        bool UpdateUser(int id, UserUpdateBody updateBody);
        bool DeleteUser(int id);
    }
}
