# dotnet

- [Checklists](https://gist.github.com/jongalloway/70e5373837534abe6c89e7ab3ec4efb5)

## Running a .NET Core Generic Host App as a Windows Service

- [https://www.stevejgordon.co.uk/asp-net-core-first-look-at-global-routing-dispatcher](https://www.stevejgordon.co.uk/asp-net-core-first-look-at-global-routing-dispatcher)

## HttpClientFactory

- ASP.NET Core 2.1
- [https://www.stevejgordon.co.uk/introduction-to-httpclientfactory-aspnetcore](https://www.stevejgordon.co.uk/introduction-to-httpclientfactory-aspnetcore)
- Startup class setup HttpClient

```csharp
service.AddHttpClient("api").AddTransientHttpErrorPolicy(p => p.RetryAsync(6))
```

- Use HttpClient everywhere in code

```csharp
public string Values { get; set; }
public async Task OnGet([FromServices]IHttpClientFactory factory)
{
	var client = factory.CreateClient("api");
	Values = await client.GetStringAsync("http://localhost:5000/Values");
}
```
