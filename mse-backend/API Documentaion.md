### Upload Endpoint

`Description`: This endpoint allows the user to upload multiple .zip.gz files.

`URL`: /upload

`Method`: POST

`Content-Type`: multipart/form-data

`Request Body`: <File Content>

`Response`:
200 OK for successful file upload.
400 Bad Request if the uploaded files are not of the expected format.
500 Internal Server Error for server errors. 2. Search by String

### Search by Term Endpoint

`Description`: This endpoint allows the user to search by a string.

`Method`: POST

`URL`: /search/byterm

`Request Body`:

```
{
    term : <term>
}
```

`Response`:
200 OK with search results.
400 Bad Request if the query parameter is missing or not valid.
500 Internal Server Error for server errors. 3. Search by Number

`Response Body`:

```
# Example
{
    "searchTerm": "KING",
    "executionTime": 300,
    "results": [
        {
            "docID": 1,
            "docFolder": "histories",
            "docName": "1kinghenryiv",
            "frequencies": 169
        },
        {
            "docID": 2,
            "docFolder": "histories",
            "docName": "1kinghenryiv",
            "frequencies": 160
        }
    ]
}
```

### Search by TopN Endpoint

`Description`: This endpoint allows the user to search by a number.

`Method`: Post

`URL`: /search/topn

`Request Body`:

```
{
    topN : <topN>
}
```

`Response`:

200 OK with search results.
400 Bad Request if the query parameter is missing or not valid.
500 Internal Server Error for server errors.

`Response Body`:

```
# Example
{
    "topN": 3,
    "results": [
        {
            "term": "KING",
            "totalFrequencies": 5000
        },
        {
            "term": "HENRY",
            "totalFrequencies": 4500
        },
        {
            "term": "THE",
            "totalFrequencies": 4000
        }
    ]
}
```
