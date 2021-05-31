using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ApisTest.Models
{
    public partial class CarsDBContext : DbContext
    {
        public CarsDBContext()
        {
        }

        public CarsDBContext(DbContextOptions<CarsDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Car> Cars { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=localhost;Database=CarsDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Modern_Spanish_CI_AS");

            modelBuilder.Entity<Car>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Bastidor)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("bastidor");

                entity.Property(e => e.FechaEntrega)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("fechaEntrega");

                entity.Property(e => e.IdPedido)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idPedido");

                entity.Property(e => e.Matricula)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("matricula");

                entity.Property(e => e.Modelo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("modelo");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
