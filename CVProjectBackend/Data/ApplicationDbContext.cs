using CVProjectBackend.Model;
using Microsoft.EntityFrameworkCore;
namespace CVProjectBackend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
    }
}
