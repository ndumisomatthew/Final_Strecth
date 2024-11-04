/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b42lcoceaylxwqb")

  // remove
  collection.schema.removeField("tpqe2czx")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b42lcoceaylxwqb")

  // add
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
})
