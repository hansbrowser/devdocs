# Blazor

## RequestParameterFromQuery
```cs
	[Parameter]
	[SupplyParameterFromQuery(Name = "group")]
	public string[] Groups { get { return _groups.ToArray(); } set { _groups.Clear(); _groups.AddRange(value); } }
	private readonly List<string> _groups = new();

    private void UpdateUri()
	{
		var parms = new Dictionary<string, object?>();
		if (Groups != null) parms.Add("group", Groups);
		var uri = NavigationManager!.GetUriWithQueryParameters(parms);

		NavigationManager!.NavigateTo(uri);
	}
```