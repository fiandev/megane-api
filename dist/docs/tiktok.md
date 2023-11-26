# Tiktok API
API that provides to get metadata of tiktok post

## tiktok statistics
get statistics from a tiktok post

### example
```
/api/tiktok/statistic?url=<post_url>
```

### example response
```javascript
{
  "author": "string",
  "code": "integer",
  "data": {
    "duration": "integer",
    "hashtags": "string[]",
    "media": {
      "music": "string",
      "no_watermark": "string",
      "watermark": "string"
    },
    "post_author": {
      "id": "string",
      "nickname": "string",
      "profile": "string"
    },
    "region": "string",
    "tags": "string[]",
    "thumbnail": "string",
    "title": "string",
    "total_comment": "integer",
    "total_download": "integer",
    "total_play": "integer",
    "total_share": "integer"
  },
  "docs": "string",
  "server_time": "string",
  "status": "string"
}
```

## tiktok downloader
download video from a tiktok post

### example
```
/api/tiktok/downloader?url=<post_url>
```

### example response
```javascript
{
  "author": "string",
  "code": "integer",
  "data": {
    "media": {
      "music": "string",
      "no_watermark": "string",
      "watermark": "string"
    },
    "post_author": {
      "id": "string",
      "nickname": "string",
      "profile": "string"
    },
    "thumbnail": "string"
  },
  "docs": "string",
  "server_time": "string",
  "status": "string"
}
```

## tiktok slides downloader
Download all images from TikTok posts that are slider type

### example
```
/api/tiktok/slides?url=<post_url>
```

### example response
```javascript
{
  "author": "string",
  "code": "integer",
  "data": {
    "cover": "string",
    "images": "string[]",
    "media": {
      "music": "string"
    },
    "post_author": {
      "avatar": "string",
      "id": "string",
      "nickname": "string",
      "unique_id": "string"
    }
  },
  "docs": "string",
  "server_time": "string",
  "status": "string"
}
```

## random post downloader
download image/video from random post of a specific user

### example
```
/api/tiktok/random?username=<username>
```

### example response
```javascript
{
  "author": "string",
  "code": "integer",
  "data": {
    "cover": "string",
    "images": "string[]",
    "media": {
      "music": "string"
    },
    "post_author": {
      "avatar": "string",
      "id": "string",
      "nickname": "string",
      "unique_id": "string"
    }
  },
  "docs": "string",
  "server_time": "string",
  "status": "string"
}
```