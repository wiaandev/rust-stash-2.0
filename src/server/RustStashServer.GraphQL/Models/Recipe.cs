using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RustStash2.Models
{
    [Table("Recipe")]
    public class Recipe
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RecipeId { get; set; }
        public required string Name { get; set; }
        [ForeignKey(nameof(RecipeIngredient))]
        public required int RequiredIngredients { get; set; }
        [ForeignKey(nameof(Category))]
        public required int RecipeCategory { get; set; }
        public required string Description { get; set; }
        public required string Image { get; set; }
        public required int RequiredBench { get; set; }

    }
}
