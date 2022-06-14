const mongoose = require("mongoose")

require("dotenv").config()

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
  };

  const connection = ()=>{

      return new Promise((resolve,reject)=>{

       if ((Math.floor(Math.random()*10)+1)%2===0) {
           resolve({status:true, message:"Successfull conneciton"})
           return
       }

       reject({status:false, message:"Error on db connection"})

      })

  }
  
  module.exports={
      connection: connection
  }
