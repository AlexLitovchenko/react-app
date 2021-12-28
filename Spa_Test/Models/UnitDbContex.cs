using System;
using Microsoft.EntityFrameworkCore;
namespace Spa_Test.Models
{
    public class UnitDbContex: DbContext
    {
        public UnitDbContex(DbContextOptions<UnitDbContex> Uoptions): base(Uoptions)
        {
        }
        public DbSet<Unit> Units { get; set; }
    }
}
