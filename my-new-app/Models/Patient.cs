using System.ComponentModel.DataAnnotations;
using WebApi.Entities;

namespace WebApi.Models;

public class Patient
{
    [Key]
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int MRN { get; set; }
    public string DOB { get; set; }
    public string Sex { get; set; }
}
