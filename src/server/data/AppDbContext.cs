using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }

    public DbSet<User> User { get; set; }
    public DbSet<UserStash> UserStash { get; set; }
    public DbSet<Recipe> Recipe { get; set; }
    public DbSet<RecipeIngredient> RecipeIngredient { get; set; }
    public DbSet<Material> Material { get; set; }
    public DbSet<Category> Category { get; set; }
    public DbSet<Base> Base { get; set; }
}