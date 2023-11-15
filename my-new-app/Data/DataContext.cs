namespace WebApi.Helpers;

using Microsoft.EntityFrameworkCore;
using WebApi.Entities;

public class AppDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = "server=localhost; user=root1;password=1234;database=test100";

        var serverVersion = new MySqlServerVersion(new Version(10, 4, 27));
        optionsBuilder,.UseMySql(connetionString, serverVersion);
    }
}
