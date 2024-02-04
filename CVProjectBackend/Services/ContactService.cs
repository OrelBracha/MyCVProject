using CVProjectBackend.Model;
using CVProjectBackend.Repository;
namespace CVProjectBackend.Services
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        public void SubmitContactForm(Contact contact)
        {
            // Perform any additional business logic
            _contactRepository.AddContact(contact);
        }
    }
}
