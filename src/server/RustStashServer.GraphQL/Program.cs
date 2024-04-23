using Microsoft.EntityFrameworkCore;
using RustStashServer.GraphQL.Data;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
builder.Services.AddDbContext<AppDbContext>(options =>
{
    IConfiguration config = builder.Configuration;
    options.UseNpgsql(config.GetConnectionString("WebApiDatabase"));
});

app.MapGet("/", () => "Hello World!");

app.Run();
