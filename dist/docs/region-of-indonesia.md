# region of Indonesia API
API that can be used to search for detailed information from a region of Indonesia.

## search province by query

### example

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

## search district by query

### example
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