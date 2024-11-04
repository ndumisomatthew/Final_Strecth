/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b42lcoceaylxwqb")

  collection.name = "Runners"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1r7riuiv",
    "name": "stats",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bstd4ybw",
    "name": "fav_drink",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ozmudxus",
    "name": "decision",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Accept",
        "Decline"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tpqe2czx",
    "name": "names",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b42lcoceaylxwqb")

  collection.name = "Posts"

  // remove
  collection.schema.removeField("1r7riuiv")

  // remove
  collection.schema.removeField("bstd4ybw")

  // remove
  collection.schema.removeField("ozmudxus")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tpqe2czx",
    "name": "caption",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
