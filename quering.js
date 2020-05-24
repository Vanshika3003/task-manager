const { MongoClient, ObjectId } = require('mongodb')
//const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }
  const db = client.db(databaseName)

  //     db.collection('users').findOne({_id:new ObjectId("5eb03028e313113760604ae8")},(error,user)=>{

  //     if(error){
  //         console.log("not getting data");1
  //     }
  //     console.log(user);
  //     }
  //     ) 
  // })
  //console.log('Hello')
  db.collection('users').find({ age: 19 }).toArray((error, user) => {
    // console.log('mmm')
    if (error) {
      console.log("not getting data");
    }

    console.log(user);
  }
  )
})