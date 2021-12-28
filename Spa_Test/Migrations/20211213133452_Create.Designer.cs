﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Spa_Test.Models;

namespace Spa_Test.Migrations
{
    [DbContext(typeof(UnitDbContex))]
    [Migration("20211213133452_Create")]
    partial class Create
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.12")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("Spa_Test.Models.Unit", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("armor")
                        .HasColumnType("integer");

                    b.Property<int>("hp")
                        .HasColumnType("integer");

                    b.Property<int>("magresist")
                        .HasColumnType("integer");

                    b.Property<int>("mana")
                        .HasColumnType("integer");

                    b.Property<int>("maxhp")
                        .HasColumnType("integer");

                    b.Property<int>("maxmana")
                        .HasColumnType("integer");

                    b.Property<string>("name")
                        .HasColumnType("text");

                    b.Property<int>("x")
                        .HasColumnType("integer");

                    b.Property<int>("y")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.ToTable("Units");
                });
#pragma warning restore 612, 618
        }
    }
}
