using Microsoft.EntityFrameworkCore;

namespace my_new_app.Data
{
    public class AppDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "server=localhost;user=root1;password=1234;database=test100";
        }
    }
}
