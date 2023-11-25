# lahelu API documentation

## get memes
get each random memes with pagination

### example response
```javascript
{
  "code": "integer",
  "data": [
    {
      "categories": "string",
      "coinsMap": {},
      "createTime": "string",
      "feed": "string",
      "media": "string",
      "mediaHeight": "string",
      "mediaThumbnail": "string",
      "mediaType": "string",
      "mediaWidth": "string",
      "pinCommentID": "string",
      "postID": "string",
      "postUrl": "string",
      "sensitive": "string",
      "title": "string",
      "totalComments": "string",
      "totalDownvotes": "string",
      "totalUpvotes": "string",
      "userAvatar": "string",
      "userID": "string",
      "userPlusTime": "string",
      "userPrivilege": "string",
      "userUsername": "string"
    },
    ...
  ],
  "hasMore": "boolean",
  "nextPage": "integer",
  "status": "string"
}

```

###  API endpoints
The following API endpoints are available for the Lalahelu API

#### general
```shell
/api/lahelu/all
```

#### with pagination
```shell
/api/lahelu/all?page=<pageNumber>
```

