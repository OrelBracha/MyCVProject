using System.ComponentModel.DataAnnotations;



namespace CVProjectBackend.Model
{

    public class Contact
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "First name is required.")]
        [RegularExpression(@"^[A-Za-z]+$", ErrorMessage = "First name should contain only alphabetical characters.")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last name is required.")]
        [RegularExpression(@"^[A-Za-z]+$", ErrorMessage = "Last name should contain only alphabetical characters.")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email address.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Phone number is required.")]
        [RegularExpression(@"^[0-9]+$", ErrorMessage = "Phone number should contain only numeric characters.")]
        public string PhoneNumber { get; set; }
    }
}