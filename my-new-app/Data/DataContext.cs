using Microsoft.EntityFrameworkCore;
using my_new_app.Model;

namespace my_new_app.Data
{
    public class AppDbContext : DbContext
    {

        public DbSet<Patient> Patient { get; set;}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "server=localhost; user=root1;password=1234;database=test100";

            var serverVersion = new MySqlServerVersion(new Version(10, 4, 27));
            optionsBuilder.UseMySql(connectionString, serverVersion);
        }
    }
}
