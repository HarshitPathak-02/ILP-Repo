using Microsoft.AspNetCore.Mvc;
using UserApllication.Managers;

namespace UserApllication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        IUserManager _userManager;
        public UserController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        [HttpGet("/users")]
        public IActionResult GetAllUsers()
        {
            Console.WriteLine("get all users hit");
            var response = _userManager.GetAllUsers();
            return Ok(response);
        }

        [HttpGet("/user/{id}")]
        public IActionResult GetUserById(int id)
        {
            Console.WriteLine("get user by id hit");
            var response = _userManager.GetUserById(id);
            return Ok(response);

        }

        [HttpPost("/user/add")]
        public IActionResult CreateUser([FromBody] User user)
        {
            Console.WriteLine("create user hit");
            var result = _userManager.CreateUser(user);
            return Ok(result);
        }

        [HttpPut("/user/update/{id}")]
        public IActionResult UpdateUser(int id, [FromBody] UserUpdateBody updateBody)
        {
            Console.WriteLine("update user hit");
            var result = _userManager.UpdateUser(id, updateBody);
            if (result)
                return Ok("User Updated");

            return NotFound("User not found");
        }

        [HttpDelete("/user/delete/{id}")]
        public IActionResult DeleteUser(int id)
        {
            Console.WriteLine("delete user hit");
            var result = _userManager.DeleteUser(id);
            if (result)
                return Ok("User Deleted");

            return NotFound("User not found");
        }
    }
}

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }

}

public class UserUpdateBody
{
    public string Name { get; set; }
    public string Phone { get; set; }
}
