using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IoT.Core.Migrations
{
    public partial class modifyrecordproperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SPO2",
                table: "Companies",
                newName: "Temperature");

            migrationBuilder.RenameColumn(
                name: "HeartRate",
                table: "Companies",
                newName: "Humidity");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Temperature",
                table: "Companies",
                newName: "SPO2");

            migrationBuilder.RenameColumn(
                name: "Humidity",
                table: "Companies",
                newName: "HeartRate");
        }
    }
}
