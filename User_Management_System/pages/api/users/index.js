import connectMongo from "../../../database/conn";
import { getUser,postUser, putUser,deleteUser } from "../../../database/controller";
export default async function handler(req, res) {
    try{
  connectMongo()
   }
  catch(error){
    res.status(405).json({error:"Error in the connection"});
  }
  
  //type of request
  //['GET','POST','PUT','DELETE']
  const {method} = req;
  switch(method){
    case 'GET' : 
        getUser(req,res)
        // res.status(200).json({name:'GET Request'});
        break;
    case 'POST' : 
         postUser(req,res);
        // res.status(200).json({name:'POST Request'});
        break;
    case 'PUT' : 
         putUser(req,res);
        // res.status(200).json({name:'PUT Request'});
        break;
    case 'DELETE' : 
        deleteUser(req,res);
        break;
    default : 
        res.setHeader('Allow',['GET','POST','PUT','DELETE']);
        res.status(400).end('Method ${method} NOT Allowed');
  }
//   res.status(200).json({ name: 'John Doe' })
}