# region of Indonesia API


### search province by query
- endpoints
```
/api/province?search=<query>
```
#### example response

```javascript
{
  "code": "integer",
  "data": [
    {
      "alt_name": "string",
      "id": "string",
      "latitude": "string",
      "longitude": "string",
      "name": "string"
    },
    ...
  ],
  "status": "string"
}
```

### search district by query

- endpoints
```
/api/district?search=<query>
```
#### example response

```javascript
{
  "code": "integer",
  "data": [
    {
      "alt_name": "string",
      "id": "string",
      "latitude": "integer",
      "longitude": "float",
      "name": "string",
      "regency_id": "string"
    }
    ...
  ],
  "status": "string"
}
```

> built with ♥️ by fiandev