using CVProjectBackend.Model;

namespace CVProjectBackend.Services
{
    public interface IContactService
    {
        void SubmitContactForm(Contact contact);
    }
}
