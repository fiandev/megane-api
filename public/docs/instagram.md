# instagram API
API that provides to get metadata of instagram post

## get metadata of a instagram post

### example
```
/api/instagram/downloader?url=<post_url>
```

### example response
```javascript
{
  "author": "string",
  "code": "integer",
  "data": [
    ...
    {
      "thumbnail": "string",
      "url": "string", // post download url
      "wm": "string" // post author username
    }
    ...
  ],
  "docs": "string",
  "server_time": "string",
  "status": "string"
}
```