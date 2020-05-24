const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true,useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    //db.collection('users').insertOne({
       // name: 'Andrew',
        //age: 27},(error,result)=>{
           // if(error)
            //{
            //console.log("connected");
            //}
              //console.log(result.ops)
      //  }
    //)
    db.collection('users').insertMany([
        {
        name:'van',
        age:19
        },
        {
            name:'dk',
            age:24
        }
    ],(err,res)=>{
            if(err){
                console.log("error");
            }
            console.log(res.ops);
        }
    )
})