# Securing Web Applications and APIs

## Dataprotection

- data protection key used for cookies/antiforgerykey/tempdata a.o.
- store key in a place where every scalable app can reach it.

## Interacting with the Authentication System

```csharp
public interface IAuthenticationService
{
	// authenticate the specified schema
	Task<AuthenticateResult> AuthenticateAsync(...);

	// session management
	Task SignInAsync(...);
	Task SignOutAsync(...);

	// signal that authentication is required
	Task ChallengeAsync(...);

	// signal that access is denied
	Task ForbidAsync(...);
}
```

## Session Management (1)

```csharp
public void ConfigureServices(IServicesCollection services)
{
	services.AddAuthentication(defaultScheme: "cookies")
	.AddCookie("cookies", options =>
	{
		options.LoginPath = "/Account/Login";
		options.AccessDeniedPath = "/Account/Denied";

		options.Cookie.Name = "myApp";
		options.Cookie.Expiration = TimeSpan.FromHours(8);
		options.SlidingExpiration = false;

		options.Cookie.SameSite = SameSiteMode.Lax;
	});
}
```

## Session Management (2)

- Cookie contains
  - Claims
  - Metadata

```cs
var claims = new List<Claim>
{
	new Claim("sub", "123"),
	new Claim("name", "Bob")
}

var ci = new ClaimsIdentity(claims, "password", "name", "role");
var props = new AuthenticationProperties
{
	Items =
	{
		{"token", "abc"}
	}
}

await HttpContext.SignInAsync(new ClaimsPrincipal(ci), props);

```

## External Authentication (OpenIDConnect)

```csharp
services.AddAuthentication(options =>
{
	options.DefaultScheme = "cookies";
	options.DefaultChallengeScheme = "oidc";
})
.AddCookie("cookies")
.AddOpenIdConnect("oidc", options =>
{
	options.Authority = "https://my.identityserver.nl";
	options.ClientId = "server.hybrid";
	options.ClientSecret = "secret";

	options.ResponseType = "code id_token";

	options.Scope.Clear();
	options.Scope.Add("openid");
	options.Scope.Add("api");
});
```

## API Authentication

- build-in support for JWT tokens
- https://github.com/IdentityModel/IdentityModel.AspNetCore.OAuth2Introspection

```csharp
public void ConfigureServices(IServiceCollection services)
{
	services.AddAuthentication("jwt")
	.AddJwtBearer("jwt", options =>
	{
		options.Authority = "https://my.identityserver.nl";
		options.Audience = "api";
	})
}
```

## Call API

```csharp
public async Task<IActionResult> CallApi()
{
	// get token from the session (cookie, or something else....)
	var token = HttpContext.GetTokenAsync("access_token");

	var client = _httpClientFactory.CreateClient();
	client.SetBearerToken(token);

	var response = await client.GetStringAsync("https://my.api.nl/test");
	ViewBag.Json = JArray.Parse(response).toString();

	return View();
}
```
