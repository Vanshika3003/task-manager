const mongoose=require('mongoose');
const validator=require('validator');
const {MongoClient,ObjectId} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'
mongoose.set('useFindAndModify', false);
mongoose.connect(connectionURL, { useNewUrlParser: true,useUnifiedTopology:true, useCreateIndex:true })
// // const user= mongoose.model('user',{
//   name:{
//     type:String,
//     required:true,
//     trim:true
//     },
//     age:{
//         type:Number,
//            validate(value)
//            {
//                if(value < 0)
//                {
//                    throw new Error("age must be > 0")
//                }
//            }
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value))
//             {
//                 throw new Error("invalid email")
//             }
//         }
//     },
//     password:{
//         type:String,
//         trim:true,
//         required:true,
//         minlength:7,
//         validate(value){
//             if(value.toLowerCase().includes('password'))
//             {
//                 throw new error("invalid password");
//             }
//         }
//     }
// })
// const me=new user({
//     name:'vanshika',
//     age:88,
//     email:'vanshika@gmail.com',
//     password:'vanshi123kk'
// })
//  me.save().then(()=>{
//      console.log(me)
// }).catch((error)=>{
//     console.log('error!',error)
//  })

