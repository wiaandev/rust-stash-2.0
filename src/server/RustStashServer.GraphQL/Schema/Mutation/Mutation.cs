using System.Globalization;
using RustStash2.Graphql.Schema;

namespace RustStash2.Graphql.Mutation
{
    public class Mutation
    {
        private readonly List<User> _users;

        public Mutation()
        {
            _users = new List<User>();
        }
        public bool CreateUser(string username, DateOnly birthDate, string email, string profilePicture, DateTime createdOn)
        {
            User user= new User()
            {
                Username = username,
                BirthDate = birthDate,
                Email = email,
                ProfilePicture = profilePicture,
                CreatedOn = createdOn
            };

            _users.Add(user);

            return true;
        }
    }
}