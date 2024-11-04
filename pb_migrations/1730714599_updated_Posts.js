/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b42lcoceaylxwqb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fwhww70i",
    "name": "author",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
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
  collection.schema.removeField("fwhww70i")

  return dao.saveCollection(collection)
})
