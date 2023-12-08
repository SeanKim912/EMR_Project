namespace WebApi.Models;

using WebApi.Entities;

public class Patient
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int MRN { get; set; }
    public string DOB { get; set; }
    public string Sex { get; set; }
}
