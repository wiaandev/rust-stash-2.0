namespace RustStash2.Graphql.Schema
{
    public class User
    {
        public int UserId { get; set; }

        public required string Username { get; set; }

        public required DateOnly BirthDate { get; set; }

        public required string Email { get; set; }

        public string ProfilePicture { get; set; } = string.Empty;

        public DateTime CreatedOn { get; set; } = DateTime.Now;
        
    }
}