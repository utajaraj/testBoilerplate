const { connection } = require("./db/connection");
const express = require("express")
const app = express();
connection().then((good) => {

  app.all("*", (req, res) => {
    res.send("Unknown route")
  })

}).catch((unforseenError) => {

  app.all("*", (req, res) => {
    res.status(500).send("DB Unavailable")
  })

  // save log info on filesystem

})
app.listen(5001, () => {
  console.log(`Running on port: 5001`);
})                     