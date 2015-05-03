# Module Documentation

## Module Network.HTTP.Affjax

#### `AJAX`

``` purescript
data AJAX :: !
```

The effect type for AJAX requests made with Affjax.

#### `Affjax`

``` purescript
type Affjax e a = Aff (ajax :: AJAX | e) (AffjaxResponse a)
```

The type for Affjax requests.

#### `AffjaxRequest`

``` purescript
type AffjaxRequest a = { password :: Maybe String, username :: Maybe String, content :: Maybe a, headers :: [RequestHeader], url :: URL, method :: Method }
```


#### `defaultRequest`

``` purescript
defaultRequest :: AffjaxRequest Unit
```


#### `AffjaxResponse`

``` purescript
type AffjaxResponse a = { response :: a, headers :: [ResponseHeader], status :: StatusCode }
```

The type of records that will be received as an Affjax response.

#### `URL`

``` purescript
type URL = String
```

Type alias for URL strings to aid readability of types.

#### `affjax`

``` purescript
affjax :: forall e a b. (Requestable a, Respondable b) => AffjaxRequest a -> Affjax e b
```

Makes an `Affjax` request.

#### `get`

``` purescript
get :: forall e a. (Respondable a) => URL -> Affjax e a
```

Makes a `GET` request to the specified URL.

#### `post`

``` purescript
post :: forall e a b. (Requestable a, Respondable b) => URL -> a -> Affjax e b
```

Makes a `POST` request to the specified URL, sending data.

#### `post'`

``` purescript
post' :: forall e a b. (Requestable a, Respondable b) => URL -> Maybe a -> Affjax e b
```

Makes a `POST` request to the specified URL with the option to send data.

#### `post_`

``` purescript
post_ :: forall e a. (Requestable a) => URL -> a -> Affjax e Unit
```

Makes a `POST` request to the specified URL, sending data and ignoring the
response.

#### `post_'`

``` purescript
post_' :: forall e a. (Requestable a) => URL -> Maybe a -> Affjax e Unit
```

Makes a `POST` request to the specified URL with the option to send data,
and ignores the response.

#### `put`

``` purescript
put :: forall e a b. (Requestable a, Respondable b) => URL -> a -> Affjax e b
```

Makes a `PUT` request to the specified URL, sending data.

#### `put'`

``` purescript
put' :: forall e a b. (Requestable a, Respondable b) => URL -> Maybe a -> Affjax e b
```

Makes a `PUT` request to the specified URL with the option to send data.

#### `put_`

``` purescript
put_ :: forall e a. (Requestable a) => URL -> a -> Affjax e Unit
```

Makes a `PUT` request to the specified URL, sending data and ignoring the
response.

#### `put_'`

``` purescript
put_' :: forall e a. (Requestable a) => URL -> Maybe a -> Affjax e Unit
```

Makes a `PUT` request to the specified URL with the option to send data,
and ignores the response.

#### `delete`

``` purescript
delete :: forall e a. (Respondable a) => URL -> Affjax e a
```

Makes a `DELETE` request to the specified URL.

#### `delete_`

``` purescript
delete_ :: forall e. URL -> Affjax e Unit
```

Makes a `DELETE` request to the specified URL and ignores the response.

#### `affjax'`

``` purescript
affjax' :: forall e a b. (Requestable a, Respondable b) => AffjaxRequest a -> (Error -> Eff (ajax :: AJAX | e) Unit) -> (AffjaxResponse b -> Eff (ajax :: AJAX | e) Unit) -> Eff (ajax :: AJAX | e) (Canceler (ajax :: AJAX | e))
```

Run a request directly without using `Aff`.



