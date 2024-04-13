using Microsoft.EntityFrameworkCore;

public class MyApplicationDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=MyShopDB;Trusted_Connection=True;");
    }
}