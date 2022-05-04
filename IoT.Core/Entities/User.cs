using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IoT.Core.Entities
{
    public class User : IdentityUser
    {
        public bool? Gender { get; set; }
        public DateTime Birthdate { get; set; }
        public virtual ICollection<Record> Records { get; } = new HashSet<Record>();
        public virtual ICollection<UserRole> UserRoles { get; } = new HashSet<UserRole>();
    }
}
