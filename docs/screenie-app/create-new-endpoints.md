# Creating new endpoints

To make a new endpoint you need to make a file in the `routes` folder with your name of choice. Example: `example.js`
The empty version should look like this:
    
```js
const express = require('express')
const router = express.Router()
router.get("/", (req, res) => {
    res.send('Hello!')
})
module.exports = router;
```

Then you just need to add a new value to the `"routes.json"` array:
```json
{
        "endpoint": "/yourendpoint",
        "location": "./routes/yourfile"
}
```

::: info
In your endpoint JS file, leave the router endpoint on `"/"`, since you will be giving the name of the route in the main `routes.json` file.
:::