using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IoT.Core.Entities
{
    public class Record
    {
        [Key]
        public int Id { get; set; }
        public DateTime DateIssued { get; set; }
        public float Temperature { get; set; }
        public float Humidity { get; set; }
        public string? UserId { get; set; } = string.Empty;
        public virtual User? User { get; set; } 
    }
}
