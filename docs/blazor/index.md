# Blazor

## CascadingParameter
``` html
    @inject SessionStateModel SessionState


	<CascadingValue Value="@SessionState" Name="SessionState">
        <Container>
            @Body
        </Container>
    </CascadingValue>
```
```cs
	[CascadingParameter(Name = "SessionState")]
	private SessionStateModel? SessionState { get; set; }

```

## RequestParameterFromQuery
```cs
	[Parameter]
	[SupplyParameterFromQuery(Name = "q")]
	public string? SearchString { get; set; }

	[Parameter]
	[SupplyParameterFromQuery(Name = "group")]
	public string[] Groups { get { return _groups.ToArray(); } set { _groups.Clear(); _groups.AddRange(value); } }
	private readonly List<string> _groups = new();

    private void UpdateUri()
	{
		var parms = new Dictionary<string, object?>();
		if (!string.IsNullOrEmpty(SearchString)) parms.Add("q", SearchString);
		if (Groups != null) parms.Add("group", Groups);
		var uri = NavigationManager!.GetUriWithQueryParameters(parms);

		NavigationManager!.NavigateTo(uri);
	}
```

## SessionState
* SessionStateModel
```cs
public class SessionStateModel
{
	private string? _languagecode;

	public string? Languagecode
	{
		get => _languagecode;
		set
		{
			_languagecode = value;
			NotifyStateChanged();
		}
	}

	public event Action? OnChange;

	private void NotifyStateChanged() => OnChange?.Invoke();
}
```
* Startup.cs / Program.cs
```cs
builder.Services.AddScoped<SessionStateModel>();

```

* MainLayout.razor file
```html
@implements IDisposable
@inject SessionStateModel SessionState

	<CascadingValue Value="@SessionState" Name="SessionState">
		<LanguageSelect></LanguageSelect>
	</CascadingValue>

@code {

	protected override void OnInitialized()
	{
		SessionState.OnChange += StateHasChanged;
	}

	public void Dispose()
	{
		SessionState.OnChange -= StateHasChanged;
	}
}
```

* LanguageSelect.razor
```html
	@code {
	[CascadingParameter(Name = "SessionState")]
	private SessionStateModel? SessionState { get; set; }

	private LanguageModel? _item { get; set; }
	public LanguageModel? Item
	{
		get { return _item; }
		set
		{
			if (_item != value)
			{
				_item = value;
				SessionState!.Languagecode = value?.Code ?? "EN";

				if (ItemChanged.HasDelegate)
				{
					ItemChanged.InvokeAsync(value);
				}
			}
		}
	}

```