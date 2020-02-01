using System.ComponentModel.DataAnnotations;
namespace MobileStoreApp.Models
{
    public class Device
    {
        public int Id { get; set; }
        [Required]
        public string Model { get; set; }
        public int BrandId { get; set; }
        public Brand Brand { get; set; }
    }
}