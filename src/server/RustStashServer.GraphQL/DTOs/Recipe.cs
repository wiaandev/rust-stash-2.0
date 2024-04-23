namespace RustStash2.Graphql.Schema
{
    public class Recipe
    {
        public int RecipeId { get; set; }

        public required string Name { get; set; }

        public required RecipeIngredient RequiredIngredients { get; set; }

        public required Category RecipeCategory { get; set; }

        public required string Description { get; set; }

        public required string Image { get; set; }
        
        public required int RequiredBench { get; set; }
        
    }
}