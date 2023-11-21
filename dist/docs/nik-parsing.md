# NIK parsing API

## parsing NIK (personal ID of Indonesian)

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