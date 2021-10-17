# dotnet 2.2

## Api Controller Analyzers & Conventions
- Roslyn analyzers that help you ensure complete documentation of your api controllers
- Extensible sets of conventions that encapsulate common API Controller patterns
- Applicable to contollers marked with the ApiContoller attribute
- Work together to ensure correctness of the OpenApi documentation
- Reduce boilerplate plate

## Default return type for "400 Bad Request" replies
```json
{	"errors": 
	{ "Lastname": ["lastname is required"] },
	"title": "One or more validation errors occurred.",
	"status": 400,
	"tradeId": "9873489237492"
}
```

[Upgrading from 2.1 is straightforward.](https://docs.microsoft.com/en-us/aspnet/core/migration/21-to-22?view=aspnetcore-2.2&tabs=visual-studio&WT.mc_id=-blog-scottha)

- [Better integration with popular Open API (Swagger) libraries including design-time checks with code analyzers](https://blogs.msdn.microsoft.com/webdev/2018/08/23/asp-net-core-2-20-preview1-open-api-analyzers-conventions/?WT.mc_id=-blog-scottha)
- [Introduction of Endpoint Routing with up to 20% improved routing performance in MVC](https://blogs.msdn.microsoft.com/webdev/2018/08/27/asp-net-core-2-2-0-preview1-endpoint-routing/?WT.mc_id=-blog-scottha)
- Improved URL generation with the LinkGenerator class & support for [route Parameter Transformers](https://blogs.msdn.microsoft.com/webdev/2018/10/17/asp-net-core-2-2-0-preview3-now-available?WT.mc_id=-blog-scottha) ([and a post from Scott Hanselman](https://www.hanselman.com/blog/ASPNETCore22ParameterTransformersForCleanURLGenerationAndSlugsInRazorPagesOrMVC.aspx))
- [New Health Checks API for application health monitoring](https://blogs.msdn.microsoft.com/webdev/2018/08/22/asp-net-core-2-2-0-preview1-healthcheck/?WT.mc_id=-blog-scottha)
- [Up to 400% improved throughput on IIS due to in-process hosting support](https://blogs.msdn.microsoft.com/webdev/2018/09/12/asp-net-core-2-2-0-preview2-now-available/?WT.mc_id=-blog-scottha)
- [Up to 15% improved MVC model validation performance](https://blogs.msdn.microsoft.com/webdev/2018/10/17/asp-net-core-2-2-0-preview3-now-available?WT.mc_id=-blog-scottha)
- [Problem Details (RFC 7807) support in MVC for detailed API error results](https://blogs.msdn.microsoft.com/webdev/2018/09/12/asp-net-core-2-2-0-preview2-now-available/?WT.mc_id=-blog-scottha)
- [Preview of HTTP/2 server support in ASP.NET Core](https://blogs.msdn.microsoft.com/webdev/2018/08/22/asp-net-core-2-2-0-preview1-http-2-in-kestrel/?WT.mc_id=-blog-scottha)
- [Template updates for Bootstrap 4 and Angular 6](https://blogs.msdn.microsoft.com/webdev/2018/09/12/asp-net-core-2-2-0-preview2-now-available/?WT.mc_id=-blog-scottha)
- [Java client for ASP.NET Core SignalR}(https://blogs.msdn.microsoft.com/webdev/2018/08/23/asp-net-core-2-2-0-preview1-signalr-java-client/?WT.mc_id=-blog-scottha)
- [Up to 60% improved HTTP Client performance on Linux and 20% on Windows](https://blogs.msdn.microsoft.com/webdev/2018/10/17/asp-net-core-2-2-0-preview3-now-available/?WT.mc_id=-blog-scottha)
- You can get a very significant performance boost [by moving ASP.NET Core in process with IIS](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/servers/aspnet-core-module?view=aspnetcore-2.2&WT.mc_id=-blog-scottha#in-process-hosting-model).

```csharp
	[ApiController]
	[Route("api/[controller]")]
	[Authorize]
	public class MyController : ControllerBase
	{
		[HttpGet("{id}", Name = "GetCustomer")]
		public ActionResult<Customer> GetCustomer(int id)
		{
			if (id == 1)
			{
				return new Customer { Id = id, Name = "Piet" }
			}

			return NotFound();
		}
	}

```
```xml
add analyzer to projectfile:
	<PackageReference Include="Microsoft.AspNetCore.Mvc.Api.Analyzers" Version="2.2.0" PrivateAssets="All" />

add default conventions in startup:
	[assembly: ApiConventionType(typeof(DefaultApiConventions))]
```

  Healthchecks
```csharp
services.AddHealthChecks()
	.AdddiskStorageHealthCheck(options => options.AddDrive("C:\\", 1024L * 32L), "DiskSpace")
	.AddAsyncCheck("PingBing", async () =>
	{
		using (var ping = new Ping())
		{
			var result = await ping.SendPingAsync("bing.com", 5000);
			return new HealthCheckResult(
				result.Status == IPStatus.Success
				? result.RoundtripTime < 200
					? HealthStatus.Healthy
					: HealthStatus.Degraded
				: HealthStatus.Unhealthy);
		}
	})

app.UseHealthChecks("/healthchecks-api", new HealthCheckOptions
{
	Predicate = _ => true,
	ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
})
```