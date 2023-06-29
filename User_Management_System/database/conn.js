import mongoose from "mongoose"
const MONGO_URI ="mongodb+srv://read_write_user:vikasreader@redux-database.z0a5xiu.mongodb.net?/?retryWrites=true&w=majoroiity" ;
const connectMongo = async()=>{
    try{
        const {connection} =  await mongoose.connect(MONGO_URI)
        if(connection.readyState==1){
            console.log("Database Connected")
        }
    }catch(errors)
    {
        return Promise.reject(errors)
    }
}
export default connectMongo ;