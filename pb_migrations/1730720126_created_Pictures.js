/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1dw42rjuni30oh2",
    "created": "2024-11-04 11:35:26.218Z",
    "updated": "2024-11-04 11:35:26.218Z",
    "name": "Pictures",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tjsqkciz",
        "name": "post_picture",
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
  const collection = dao.findCollectionByNameOrId("1dw42rjuni30oh2");

  return dao.deleteCollection(collection);
})
