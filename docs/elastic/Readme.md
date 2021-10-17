# Introduction ElasticSearch

## How it works

- [autosearch, ngrams](https://www.youtube.com/watch?v=p_cviIn1f_k)
- [tuning for bulk indexing](https://www.elastic.co/guide/en/elasticsearch/reference/current/tune-for-indexing-speed.html#_increase_the_refresh_interval)

## mapping

- index: true/false (Fields that are not indexed are not queryable)
- boost: only available at query time (index time boost is deprecated)
- dynamic
  - strict; trying to add document with fields that are not mapped. Document is rejected.
  - false; trying to add document with fields that are not mapped. Document is accepted. Extra fields are available in \_source, but not indexed.
- keyword: search whole values
- text: search individual tokens
- default dynamic mappings for string fields are both text and keyword:

```bash
{
  "foo": {
    "type" "text",
    "fields": {
      "keyword": {
        "type": "keyword",
        "ignore_above": 256
      }
    }
  }
}
```

## Reindex

```bash
POST _reindex
{
  "source": {
    "index": "tradeitems_1"
  },
  "dest": {
    "index": "tradeitems_2",
    "version_type": "internal"
  }
}

```

## Alias

```bash
POST /_aliases
{
    "actions": [
        { "remove": { "index": "tradeitems_1", "alias": "tradeitems" }},
        { "add":    { "index": "tradeitems_2", "alias": "tradeitems" }}
    ]
}
```

## Bulk upload

- Set "refresh_interval": "-1" (Default = 1 seconde)

```bash
# index: tradeitems
# delete index
curl -XDELETE 'localhost:9200/tradeitems'

# create index
curl -H 'Content-Type: application/json' -XPUT 'localhost:9200/tradeitems' -d @index.json

# split data in smaller files
LINES=20000
split -l $LINES data.json

for xf in $(ls | grep x..$)
do
  curl --progress-bar -o nul -H 'Content-Type: application/x-ndjson' -XPOST localhost:9200/tradeitems/_bulk --data-binary @$xf
  rm $xf
done

# refresh index
curl -s -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:9200/tradeitems/_refresh'
```
