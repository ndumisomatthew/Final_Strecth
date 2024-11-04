/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b42lcoceaylxwqb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dkbiv3oh",
    "name": "pics",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1dw42rjuni30oh2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b42lcoceaylxwqb")

  // remove
  collection.schema.removeField("dkbiv3oh")

  return dao.saveCollection(collection)
})
