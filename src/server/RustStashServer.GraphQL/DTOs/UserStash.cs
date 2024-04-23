namespace RustStash2.Graphql.Schema
{
    public class UserStash
    {
        public int UserStashId { get; set; }

        public required Material MaterialId { get; set; }

        public required User Owner { get; set; }

        public required Base BaseSpecified { get; set; }

    }
}