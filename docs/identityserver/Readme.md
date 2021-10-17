# IdentityServer, OpenID Connect/OAuth-2

## flows

- Client Credentials Flow
  - client_credentials
  - server-to-server communication
  - token endpoint
- Authorization Code Flow (OAuth2)
  - response_type: code
  - user-centric clients
  - authorize endpoint
- Hybrid Flow (OpenID Connect)
  - more secure then Authorization Code Flow
  - response_type: code id_token
  - user-centric clients
  - authorize endpoint
- Proof Key for Code Exchange (PKCE)
  - also works without a client secret
  - per request client secret
  - responst_type: code
- Implicit flow is outdated (almost deprecated)
  - Use Code Flow + PKCE instead (One flow for all)

## oidc-client.js (Code Flow + PKCE)

```js
var settings = {
  authority: "https://localhost:5001",
  client_id: "myClient",
  redirect_uri: "http://localhost:5000/callback",
  response_type: "code",
  scope: "openid profile api",
  post_logout_redirect_uri: "http://localhost:5000/index.html",
  automaticSilentRenew: false,
  silent_redirect_uri: "http://localhost:5000/silent.html"
};

var mgr = new Oidc.UserManager(settings);

mgr.getUser().then(function(user) {
  if (user) {
    log("logged in", user);
  } else {
    log("user is not logged in");
  }
});

function login() {
  mgr.signinRedirect();
}

function login() {
  mgr.signoutRedirect();
}

function silent() {
  mgr
    .signinSilent()
    .then(function(user) {
      log("silent renew", user);
    })
    .catch(function(error) {
      log(error);
    });
}
```

## Alternative: Backends for Frontends (BFF)

- Proxy Api
  - handles tokens
  - [ProxyKit](https://github.com/damianh/ProxyKit)
- SPA uses cookie to Proxy (can be http-only and SameSite: Strict)
- [Blog post](https://leastprivilege.com/2019/01/18/an-alternative-way-to-secure-spas-with-asp-net-core-openid-connect-oauth-2-0-and-proxykit/)
