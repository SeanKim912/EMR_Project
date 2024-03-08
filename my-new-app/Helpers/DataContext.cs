namespace Clinic.Helpers;

using Microsoft.EntityFrameworkCore;
using Clinic.Models;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options) { }

    public DbSet<User> Users { get; set; } = null!;
}
