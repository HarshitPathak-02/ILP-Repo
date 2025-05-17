namespace UserApllication.Managers
{
    public class UserManager:IUserManager
    {
        public static List<User> allUsers = new List<User>();
        public User GetUserById(int id)
        {
            Console.WriteLine("get user by id manager hit");
            return allUsers.FirstOrDefault(u => u.Id == id);
        }

        public List<User> GetAllUsers()
        {
            Console.WriteLine("get all users manager hit");
            return allUsers;
        }

        public string CreateUser(User user)
        {
            Console.WriteLine("create user manager hit");
            allUsers.Add(user);
            return "User Added Successfully";
        }

        public bool UpdateUser(int id, UserUpdateBody userUpdateBody)
        {
            Console.WriteLine("update user manager hit");
            var user = allUsers.FirstOrDefault(u => u.Id == id);
            if (user == null)
                return false;

            user.Name = userUpdateBody.Name;
            user.Phone = userUpdateBody.Phone;
            return true;
        }

        public bool DeleteUser(int id)
        {
            Console.WriteLine("delete user manager hit");
            var user = allUsers.FirstOrDefault(u => u.Id == id);
            if (user == null)
                return false;

            allUsers.Remove(user);
            return true;
        }
    }
}
