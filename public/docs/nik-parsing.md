# NIK parsing API
An API based on the NIK format and parses any available data.

## parsing NIK
NIK is a personal ID of Indonesian can be see on the family card document.

### example
```
/api/check-nik?nik=<NIK>
```

### example response
```javascript
{
  "code": "integer",
  "data": {
    "birthdate": {
      "date": "string",
      "day": "string",
      "month": "string",
      "year": "integer"
    },
    "district": "string",
    "nik": "string",
    "province": {
      "latitude": "integer",
      "longitude": "float",
      "name": "string"
    },
    "subdistrict": {
      "latitude": "integer",
      "longitude": "float",
      "name": "string"
    },
    "uniqid": "string"
  },
  "status": "string"
}
```