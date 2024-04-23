using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace RustStash2.Models
{
    [Table("UserStash")]
    public class UserStash
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserStashId { get; set; }
        [ForeignKey(nameof(Material))]
        public required int MaterialId { get; set; }
        [ForeignKey(nameof(User))]
        public required int Owner { get; set; }
        [ForeignKey(nameof(Base))]
        public required int BaseSpecified { get; set; }

    }
}
