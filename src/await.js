require('./db/mongoose')
const User=require('./models/user');
const updateAgeAndCount=async(id,age)=>{
    const a=await User.findByIdAndUpdate(id,{age})
    const count=await User.countDocuments({age});
    return count
}
updateAgeAndCount("5eb03028e313113760604ae8",2).then((count)=>{
     console.log(count)
}).catch((e)=>{
    console.log(e)
})
