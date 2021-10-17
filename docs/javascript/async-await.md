# Async Await
- [youtube](https://www.youtube.com/watch?v=vn3tm0quoqE&list=WL&index=133)

## 

```js

```

# Async Await with Try-catch
```js
    try {
       const user = await UserModel.findById(1);
       if(!user) return cb('No user found');
    } catch(e) {
        return cb('Unexpected error occurred');
    }
```

- Alternative
```js 
// to.js
export default function to(promise) {
   return promise.then(data => {
      return [null, data];
   })
   .catch(err => [err]);
}

     let err, user, savedTask;

     [err, user] = await to(UserModel.findById(1));
     if(!user) throw new CustomerError('No user found');

```