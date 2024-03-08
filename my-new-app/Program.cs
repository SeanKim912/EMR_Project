using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using Clinic.Helpers;
using Clinic.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
{
    var services = builder.Services;
    var env = builder.Environment;
    var connectionString = builder.Configuration.GetConnectionString("Users") ?? "Data Source=Users.db";
    builder.Services.AddControllersWithViews();
    services.AddEndpointsApiExplorer();
    services.AddSqlite<DataContext>(connectionString);
    services.AddCors();
    services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "Clinic API", Version = "v1" });
    });
    services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
}


var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Clinic API v1"));

// configure HTTP request pipeline
{
    // global cors policy
    app.UseCors(x => x
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());

    // global error handler
    // app.UseMiddleware<ErrorHandlerMiddleware>();

    app.MapControllers();
}

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}



app.Run("http://localhost:4000");
