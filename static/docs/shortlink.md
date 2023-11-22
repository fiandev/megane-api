# shortlink API

## example response
```javascript
{
  "code": "integer",
  "data": {
    "url": "string"
  },
  "status": "string"
}
```

### endpoints
available shortlink APIs
1. Adf.ly
2. Bit.ly
3. Chilp.it
4. Clck.ru
5. Cutt.ly
6. Da.gd
7. Is.gd
8. NullPointer
9. Os.db
10. Ow.ly
11. Po.st
12. Qps.ru
13. Short.cm
14. Tiny.cc
15. TinyURL.com
16. Tiny.cc

#### example endpoints
the default vendor is tinyurl

without apikey
```
/api/shortlink?url=<url>&vendor=<vendor>
```

with apikey
```
/api/shortlink?url=<url>&vendor=<vendor>&apikey=<apikey>
```
