/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b42lcoceaylxwqb",
    "created": "2024-11-04 10:00:03.055Z",
    "updated": "2024-11-04 10:00:03.055Z",
    "name": "Posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "umzaucoh",
        "name": "picture",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 99,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b42lcoceaylxwqb");

  return dao.deleteCollection(collection);
})
