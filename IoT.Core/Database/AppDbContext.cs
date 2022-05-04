using IoT.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BugTracker.Core.Database
{
    public class AppDbContext : IdentityDbContext<User, Role, string, IdentityUserClaim<string>, UserRole, IdentityUserLogin<string>, IdentityRoleClaim<string>, IdentityUserToken<string>>
    {
        // public AppDbContext() { }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public virtual DbSet<Record> Companies { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            modelBuilder.Entity<UserRole>(entity =>
            {
                entity.HasOne(ur => ur.Role)
                    .WithMany(r => r!.UserRoles)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.Cascade);

                entity.HasOne(ur => ur.User)
                    .WithMany(u => u!.UserRoles)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.Cascade);
            });


            modelBuilder.Entity<Record>(entity =>
            {
                entity.HasOne(rec => rec.User)
                    .WithMany(usr => usr.Records)
                    .HasForeignKey(rec => rec.UserId)
                    .OnDelete(DeleteBehavior.Cascade);
            });
        }
    }
}