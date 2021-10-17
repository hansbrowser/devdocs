# Dapper

## Select SingleOrDefault

```csharp
public async Task<Contact> GetContact(int contactId)
{
	const string Query = @"SELECT * FROM Contacts WHERE Id = @id;";

	using (var con = new SqlConnection(_connectionString))
	{
		var model = await con.QuerySingleOrDefaultAsync<Contact>(Query, new { id = contactId });
		return model;
	}
}
```

## Select list

```csharp
public async Task<IEnumerable<Category>> GetCategories()
{
	const string Query = @"SELECT * FROM Categories;";

	using (var con = new SqlConnection(_connectionString))
	{
		var result = await con.QueryMultipleAsync(Query);
		var model = await result.ReadAsync<Category>();

		return model;
	}
}
```

## Select list nested

```csharp
public async Task<IEnumerable<Product>> GetProducts()
{
	const string Query = @"
		SELECT * FROM Products;
		SELECT * FROM Categories;
		SELECT * FROM ProductMaterials;";

	using (var con = new SqlConnection(_connectionString))
	{
		var result = await con.QueryMultipleAsync(Query);
		var products = await result.ReadAsync<Product>();
		var categories = await result.ReadAsync<Category>();
		var productMaterials = await result.ReadAsync<ProductMaterial>();
		foreach (var product in products)
		{
			product.Category = categories.FirstOrDefault(x => x.Id == product.CategoryId);
			product.Materials = productMaterials.Where(x => x.ProductId == product.Id);
		}

		return products;
	}
}
```

## Insert

```csharp
// returns the number of rows affected.
public async Task<int> Addcontact(Contact contact)
{
	const string Query = @"
		INSERT INTO Contacts(SessionId, OrderId, Amount)
		VALUES(@sessionId, @orderId, @amount)
		";
	using (var con = new SqlConnection(_connectionString))
	{
		var result = await con.ExecuteAsync(Query, contact);

		return result;
	}
}
```

```csharp
// returns the inserted id.
public async Task<int> Addcontact(Contact contact)
{
	const string Query = @"
		DECLARE @newId INT;
		INSERT INTO Contacts(SessionId, OrderId, Amount)
		VALUES(@sessionId, @orderId, @amount);
		SELECT @newId = CAST(SCOPE_IDENTITY() AS INT);
		SELECT @newId;
		";
	using (var con = new SqlConnection(_connectionString))
	{
		var result = (int)await con.ExecuteScalarAsync(Query, contact);

		return result;
	}
}
```

## Update

```csharp
// returns the number of rows affected.
public async Task<int> UpdateContact(Contact contact)
{
	const string Query = @"
		UPDATE Contacts
		SET Betaald = @betaald, PaymentId = @paymentId, PaymentStatus = @paymentStatus
		WHERE Id = @id";

	using (var con = new SqlConnection(_connectionString))
	{
		var result = await con.ExecuteAsync(Query, contact);
		return result;
	}
}
```
