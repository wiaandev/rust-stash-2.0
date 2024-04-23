using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RustStash2.Models
{

    [Table("Material")]
    public class Material
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaterialId { get; set; }
        public required string Image { get; set; }
        public required string Description { get; set; }
        [ForeignKey(nameof(Category))]
        public required int MaterialCategory { get; set; }
        public int Quantity { get; set; } = 0;
        public bool IsCraftable { get; set; } = true;

    }
}
