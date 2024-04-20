using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Admin")]
public class User
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int UserId { get; set; }

    public required string Username { get; set; }
    public required DateOnly BirthDate { get; set; }
    public required string Email { get; set; }
    public string ProfilePicture { get; set; } = string.Empty;
    public DateTime CreatedOn { get; set; } = DateTime.Now;

}