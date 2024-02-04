using Microsoft.AspNetCore.Mvc;

namespace CVProjectBackend.Controllers
{
    using CVProjectBackend.Model;
    using CVProjectBackend.Services;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpPost]
        public IActionResult SubmitContactForm([FromBody] Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _contactService.SubmitContactForm(contact);
                return Ok(new { Message = "Form submitted successfully!" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = "Internal Server Error", Error = ex.Message });
            }
        }
    }
}
