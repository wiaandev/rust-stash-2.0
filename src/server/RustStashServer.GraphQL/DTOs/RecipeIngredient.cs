namespace RustStash2.Graphql.Schema
{
    public class RecipeIngredient
    {
        public required int RecipeIngredientId { get; set; }

        public required UserStash StashItemId { get; set; }

        public required int RequiredQuantity { get; set; }
        
    }
}