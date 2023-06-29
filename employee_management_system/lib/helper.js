export const getUser = async()=>{
    const response = fetch('http://localhost:3000/api/users');
    const json = await (await response).json()
    return json ;
}
//single user
export const getoneUser = async(userid)=>{
    const response = fetch(`http://localhost:3000/api/users`);
    const json = await (await response).json()
    var object = json ;
    for (let i = 0; i<Object.keys(object.users).length; i++) {
        if (object.users[i]._id==userid){
            return object.users[i] ;
        }
      }
    // return json ;
}
//posting a new user
export async function addUser(formData){
    try{
        const Options = {
           method:'POST',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(formData) 
        }
        const response = await fetch('http://localhost:3000/api/users',Options)
        const json  = await response.json()
        return json;
    }catch(error){
           return error;
        }
    }

    //updating a new user
export async function updateUser(userid,formData){
    try{
        const Options = {
           method:'PUT',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(formData) 
        }
        const response = await fetch(`http://localhost:3000/api/users?userid=${userid}`,Options)
        const json  = await response.json()
        return json;
    }catch(error){
           return error;
        }
    }
    //Delete a user
    export async function deleteUser(userid){
        try{
            const Options = {
               method:'DELETE',
               headers:{'Content-Type':'application/json'},
         
            }
            const response = await fetch(`http://localhost:3000/api/users?userid=${userid}`,Options)
            const json  = await response.json()
            return json;
        }catch(error){
               return error;
            }
        
    }