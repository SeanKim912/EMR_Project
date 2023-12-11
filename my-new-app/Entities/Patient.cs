namespace WebApi.Entities;

using System.Text.Json.Serialization;

public class Patient
{
    public int Id { get; set; }
    public int MRN { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Sex { get; set; }
    public string DOB { get; set; }
    public string Phone { get; set; }
    public string Address { get; set; }
    public string Email { get; set; }
}
