using System.Security.Cryptography;
using Microsoft.EntityFrameworkCore;
using RustStash2.Models;


namespace RustStashServer.GraphQL.Data
{
    public class AppDbContext : DbContext
    {

        protected readonly IConfiguration Configuration;

        public AppDbContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseNpgsql(Configuration.GetConnectionString("WebApiDatabase"));
        }

        public DbSet<User> User { get; set; }
        public DbSet<UserStash> UserStash { get; set; }
        public DbSet<Recipe> Recipe { get; set; }
        public DbSet<RecipeIngredient> RecipeIngredient { get; set; }
        public DbSet<Material> Material { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Base> Base { get; set; }
    }
}
