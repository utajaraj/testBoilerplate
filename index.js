const { connection } = require("./db/connection");
const express = require("express")
const app = express();
connection().then((good) => {


}).catch((unforseenError) => {



  // save log info on filesystem

})
app.listen(5001, () => {
  console.log(`Running on port: 5001`);
})                     