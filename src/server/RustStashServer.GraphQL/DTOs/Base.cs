using RustStash2.Graphql.Schema;

namespace RustStash2.Graphql.Schema
{
    public class Base
    {
        public int BaseId { get; set; }

        public required string Langitude { get; set; }

        public required string Longitude { get; set; }

        public required UserStash Stash { get; set; }

        public required User Owner { get; set; }
    }
}