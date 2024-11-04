/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mmjoi36767rxu4c",
    "created": "2024-11-04 18:39:32.850Z",
    "updated": "2024-11-04 18:39:32.850Z",
    "name": "Map",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jzx0pb21",
        "name": "field",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("mmjoi36767rxu4c");

  return dao.deleteCollection(collection);
})
