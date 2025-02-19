# Adding new folders to the checker

To add new folders to the checker, you simply add a new list item containing the path of the folder in the `folders.json` file in the `data` directory. The checker (`/functions/check.js`) will run through all the list items, and checking them, if they exist, if they don't exist, it will make the specified folder.

Default `data/folders.json`

```json
["./src/uploads", "./src/uploads/profile_pictures", "./src/archives"]
```