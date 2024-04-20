using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Base")]
public class Base
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int BaseId { get; set; }
    public required string langitude { get; set; }
    public required string longitude { get; set; }
    [ForeignKey(nameof(UserStash))]
    public int Stash { get; set; }
    [ForeignKey(nameof(User))]
    public int Owner { get; set; } 

}