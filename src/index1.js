const express=require('express');
const app=express()
const userrouter=require('./routers/user')
require('./db/mongoose')
const user=require('./models/user');
const port=process.env.PORT||3000
  console.log("hey")    

 app.use(express.json());
app.use(userrouter)
//  const router=new express.Router()
//  router.get('/test',(req,res)=>{
//    res.send('this is from my router')
//  })
//  app.use(router);

// app.post('/users',async(req,res)=>{
//    const User=new user(req.body);
//  //console.log("hey")    

// try{
//     await User.save()
//     res.status(201).send(User)
// }
// catch(e){
//     res.status(400).send(e)
// }
// })
// app.get('/users',(req,res)=>{
//   user.find({}).then((user)=>{
//        res.send(user)
//   }).catch((e)=>{
//     res.send(500).send(e);
//   })

// })
// app.get('/users/:id',(req,res)=>{
//   const _id=req.params.id
//   user.findById(_id).then((user)=>{
//   if (!user) {
//     return res.status(404).send()
//   }
//   res.send(user)
//   }).catch((e)=>{
//     res.send(500).send(e)
//   })

// })
// app.patch('/users/:id',async(req,res)=>{
//     try{
//  const User=await user.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
//  if(!User)
//  {
//      res.status(404).send()
//  }
//  res.send(User)
//     }
//     catch(e)
//  {
//    res.status(500).send(e)
//  }
// })
 const bcrypt=require('bcrypt')
 const myFunction=async()=>{
   const password='vanshika123!'
   const hashedPassword=await bcrypt.hash(password,8)
   console.log(password)
   console.log(hashedPassword)
   const isMatch=await bcrypt.compare('vanshika123!',hashedPassword)
   console.log(isMatch)
 }
 myFunction()

app.listen(port,()=>{
    console.log("server is working1");
})
