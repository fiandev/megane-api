# Alquran API
API that provides Al-Quran data complete with translation and interpretation

## get all surah
Get bulk data of all list of surahs

### example
```
/api/quran/surah/all
```

### example response

```javascript
{
  "author": "string",
  "code": "integer",
  "data": [
    ...
    {
      "arti": "string",
      "asma": "string",
      "audio": "string",
      "ayat": "integer",
      "keterangan": "string",
      "nama": "string",
      "nomor": "string",
      "rukuk": "string",
      "type": "string",
      "urut": "string"
    }
    ...
  ],
  "docs": "string",
  "server_time": "string",
  "status": "string"
}
```

## get data surah
Get bulk data based on surah number sequence

```
/api/quran/surah/<surah_id>
```

### example
```
/api/quran/surah/1
```

### example response
```javascript
{
  "author": "string",
  "code": "integer",
  "data": {
    "audio": "string",
    "ayahs": [
      ...
      {
        "arab": "string",
        "audio": {
          "ahmedajamy": "string",
          "alafasy": "string",
          "husarymujawwad": "string",
          "minshawi": "string",
          "muhammadayyoub": "string",
          "muhammadjibreel": "string"
        },
        "image": {
          "primary": "string",
          "secondary": "string"
        },
        "meta": {
          "hizbQuarter": "integer",
          "juz": "integer",
          "manzil": "integer",
          "page": "integer",
          "ruku": "integer",
          "sajda": {
            "obligatory": "boolean",
            "recommended": "boolean"
          }
        },
        "number": {
          "inQuran": "integer",
          "inSurah": "integer"
        },
        "tafsir": {
          "jalalayn": "string",
          "kemenag": {
            "long": "string",
            "short": "string"
          },
          "quraish": "string"
        },
        "translation": "string"
      }
      ...
    ],
    "bismillah": {
      "arab": "string",
      "audio": {
        "ahmedajamy": "string",
        "alafasy": "string",
        "husarymujawwad": "string",
        "minshawi": "string",
        "muhammadayyoub": "string",
        "muhammadjibreel": "string"
      },
      "translation": "string"
    },
    "description": "string",
    "name": "string",
    "number": "integer",
    "numberOfAyahs": "integer",
    "revelation": "string",
    "translation": "string"
  },
  "docs": "string",
  "server_time": "string",
  "status": "string"
}
```

## get data juz
Get bulk data based on juz number sequence

```
/api/quran/juz/<juz_id>
```

### example
```
/api/quran/juz/1
```

### example response
```javascript
{
  "author": "string",
  "code": "integer",
  "data": {
    "juz": "integer",
    "juzEndInfo": "string",
    "juzEndSurahNumber": "integer",
    "juzStartInfo": "string",
    "juzStartSurahNumber": "integer",
    "totalVerses": "integer",
    "verses": [
      ...
      {
        "audio": {
          "primary": "string",
          "secondary": "string[]"
        },
        "meta": {
          "hizbQuarter": "integer",
          "juz": "integer",
          "manzil": "integer",
          "page": "integer",
          "ruku": "integer",
          "sajda": {
            "obligatory": "boolean",
            "recommended": "boolean"
          }
        },
        "number": {
          "inQuran": "integer",
          "inSurah": "integer"
        },
        "tafsir": {
          "id": {
            "long": "string",
            "short": "string"
          }
        },
        "text": {
          "arab": "string",
          "transliteration": {
            "en": "string"
          }
        },
        "translation": {
          "en": "string",
          "id": "string"
        }
      }
      ...
    ]
  },
  "docs": "string",
  "server_time": "string",
  "status": "string"
}
```


## discovery Qur'an
Search for translations and interpretations that contain the given keywords

### basic
basic search has a search limit of 3 items of result

```
/api/quran/discovery?search=<keyword>
```

### customize limit
By adding limit parameters you can customize the limit of the total results according to your wishes.
```
/api/quran/discovery?search=<keyword>&limit=<number>
```

### customize start juz and end juz to search
by adding a start or end parameter you can set the start and end where the search will be carried out.

\#note: the number represents the sequence of juz

```
/api/quran/discovery?search=<keyword>&start=<integer>&end=<integer>
```

### example
```
/api/quran/discovery?search=bismillah&start=1&end=2&limit=10
```
### example response

```javascript
{
  "author": "string",
  "code": "integer",
  "data": [
    ...
    {
      "ayah_number": "integer",
      "context": {
        "numberInSurah": "integer",
        "revelation": "string",
        "surah_name": "string",
        "text": "string"
      },
      "tafsir": "string",
      "translation": "string"
    }
    ...
  ]
  "docs": "string",
  "query": "string",
  "range": "string",
  "server_time": "string",
  "status": "string"
}
```