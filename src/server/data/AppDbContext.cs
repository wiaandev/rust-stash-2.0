using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }

    DbSet<User> User { get; set; }
    DbSet<UserStash> UserStash { get; set; }
    DbSet<Recipe> Recipe { get; set; }
    DbSet<RecipeIngredient> RecipeIngredient { get; set; }
    DbSet<Material> Material { get; set; }
    DbSet<Category> Category { get; set; }
    DbSet<Base> Base { get; set; }
}