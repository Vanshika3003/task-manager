const {MongoClient,ObjectId} = require('mongodb')
//const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true,useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    db.collection('users').deleteMany({
        age:19
    }).catch((result)=>{
   console.log(result)
}).then((error)=>{
    console.log(error)
})
})