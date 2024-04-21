using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly AppDbContext _context;

    public UserController(AppDbContext dbContext)
    {
        _context = dbContext;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        if (_context.User == null)
        {
            return await _context.User.ToListAsync(); ;
        }
        return await _context.User.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<User>> PostUser(User user)
    {
        if (_context.User == null)
        {
            return Problem("Entity set 'AppDbContext.Admin'  is null.");
        }

        _context.User.Add(user);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetAdmin", new { id = user.UserId }, user);
    }
}