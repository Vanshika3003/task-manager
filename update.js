const {MongoClient,ObjectId} = require('mongodb')
//const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true,useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    db.collection('users').updateOne({
        _id: new ObjectId("5eb066772aef6b4a5caddd4b")
    },
    {
        $inc:{
            age:1
        }
}).catch((result)=>{
   console.log(result)
}).then((error)=>{
    console.log(error)
})
})

