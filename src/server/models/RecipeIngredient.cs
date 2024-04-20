using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("RecipeIngredient")]
public class RecipeIngredient
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public required int RecipeIngredientId { get; set; }
    [ForeignKey(nameof(UserStash))]
    public required int StashItemId { get; set; }
    public required int RequiredQuantity { get; set; }
}