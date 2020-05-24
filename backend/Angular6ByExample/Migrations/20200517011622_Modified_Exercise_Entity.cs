using Microsoft.EntityFrameworkCore.Migrations;

namespace Angular6ByExample.Migrations
{
    public partial class Modified_Exercise_Entity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "Exercises");

            migrationBuilder.AddColumn<int>(
                name: "Duration",
                table: "Exercises",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Duration",
                table: "Exercises");

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Exercises",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
