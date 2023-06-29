
import User from "../model/user"
//get:http://localhost:3000/api/users
export async function getUser(req,res){
    try{
        const users = await User.find({})
        if(!users) return res.status(404).json({error:"data not foound"})
     res.status(200).json({users})
    }catch(error){
      res.status(404).json({error:"Error while fetching Data"})
    }
}
//post:http://localhost:3000/api/users
export async function postUser(req,res){
    try{
       const formData = req.body;
       if(!formData)return res.status(404).json({error:"Form data not provided"});
       User.create(formData,function(err,data){
        return res.status(200).json(data)})
        
    }catch(error)
    {
        return res.status(404).json({error})
    }
}
//put:http://localhost:3000/api/users/1
export async function putUser(req,res){
   try{
    const {userid} =  req.query;
    const formData = req.body;
    console.log(userid)
    console.log(formData)
    if(userid && formData){
        const user = await User.findByIdAndUpdate(userid,formData);
        res.status(200).json(user);
    }
    res.status(404).json({error:"User Not Selected..."})
   }catch(err){
      res.status(404).json({err:"Error while updating the data"})
   }
}
//delete:http://localhost:3000/api/users/1
export async function deleteUser(req,res){
    try{
     const {userid} =  req.query;
     if(userid){
         await User.findByIdAndDelete(userid)
         return res.status(200).json({deleted:userid})
     }
     res.status(404).json({error:"User Not Selected..."})
    }catch(err){
       res.statu(404).json({err:"Error while deleting the data"})
    }
 }
 











