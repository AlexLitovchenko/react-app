using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema; 
namespace Spa_Test.Models
{
    public class Unit
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName="text")]
        public string name { get; set; }
       
        public int hp { get; set; }
        public int maxhp { get; set; }
        public int mana { get; set; }
        public int maxmana { get; set; }
        public int armor { get; set; }
        public int magresist { get; set; }
        public int x { get; set; }
        public int y { get; set; }


    }
}
