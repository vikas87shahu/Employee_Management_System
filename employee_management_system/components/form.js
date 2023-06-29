
import AddUserForm from "./addUserForm"
import UpdateUserForm from "./updateUserForm";
import { useSelector } from "react-redux";
import { useReducer } from "react";
const formReducer = (state,event)=>{
    return {
     ...state,
     [event.target.name]:event.target.value
    }
 }

export default function Form(){
    const[formData,setFormData] = useReducer(formReducer,{})

    const formid = useSelector((state)=>state.app.client.formid)
    // const flag =false;
    return(
        <div className='container mx-auto'>
    {formid?UpdateUserForm({formid,formData,setFormData}):AddUserForm({formData,setFormData})}
    </div>
    )
} 