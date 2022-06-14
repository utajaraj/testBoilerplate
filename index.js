const { connection } = require("./connection");
const fs = require("fs")
const express = require("express")
const app = express();
function writeToJson(path,payload) {
  let log = {...payload}
  let dynamicPath = `${__dirname+path}`
  let data = [...require(`${dynamicPath}`)]
  log["id"]=data.length+1
  fs.writeFileSync(dynamicPath,JSON.stringify([...data,log]))
}
connection().then((good) => {
  
  writeToJson("/connections.json",{message:good.message,data: new Date()})
  app.get("/connections",(req,res)=>{
    res.send(require(`${__dirname+"/connections.json"}`))
  })
  app.get("/connections/id/:id",(req,res)=>{
    let data = require(`${__dirname+"/connections.json"}`).filter(x=>x.id==req.params.id)
    res.send(data)
  })
}).catch((unforseenError) => {
  app.get("*",(req,res)=>{
    res.send("No db conneciton")
  })
  // save log info on filesystem
  writeToJson("/errors.json",{message:unforseenError.message,data:unforseenError.data})
})
app.listen(5001, () => {
  console.log(`Running on port: 5001`);
})                     