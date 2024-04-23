namespace RustStash2.Graphql.Schema
{
    public class Material
    {
        public int MaterialId { get; set; }

        public required string Image { get; set; }

        public required string Description { get; set; }

        public required Category MaterialCategory { get; set; }

        public int Quantity { get; set; } = 0;

        public bool IsCraftable { get; set; } = true;
        
    }
}