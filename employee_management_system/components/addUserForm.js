import { useReducer } from "react"
import { BiPlus } from "react-icons/bi"
import Success from "./success"
import Bug from "./bug"
import { useQueryClient,useMutation, isError } from "react-query"
import { addUser, getUser } from "../lib/helper"

export default function AddUserForm({formData,setFormData}){

    const queryClient = useQueryClient()
    const addMutation = useMutation(addUser,{
        onSuccess:()=>{
            queryClient.prefetchQuery('users',getUser);
        }
    });
    
    // const [formData,setFormData] = useReducer(formReducer,{})
    
    const handleSubmit =(e)=>{
        e.preventDefault()
    if(Object.keys(formData).len==0) return console.log("fill all the boxes");
     let {firstname,lastname,email,salary,date,status} = formData;
     const model = {
        name:`${firstname} ${lastname}`,
        email,
        salary,
        date,status:status??'Active'
     }
      addMutation.mutate(model)
    }
    
    if(addMutation.isLoading) return<div>Loading</div>
    if(addMutation.isError) return <Bug message={addMutation.error}></Bug>
    if(addMutation.isSuccess)return <Success message={"Added Successfully"}></Success>
    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
           <div className="input-type">
           <input type="text" name="firstname" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Firstname"/>
            </div>
            <div className="input-type">
            <input type="text" name="lastname" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Lastname"/>
            </div>
            <div className="input-type">
            <input type="text" name="email" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email"/>
            </div>
            <div className="input-type">
            <input type="text" name="salary" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Salary"/>
            </div>
            <div className="input-type">
            <input type="text" name="date" onChange={setFormData} className="border px-5 py-3 focus:outline-none rounded-md" placeholder="date"/>
            </div>
            <div className="flex gap-10 items-center">
            <div className="form-check">
                <input type="radio" name="status" onChange={setFormData} value="Active" id="radioDefault1"className = "form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault1" className="inline-block tet-gray-800 ">
                    Active
                </label>
            </div>
            <div className="form-check">
                <input type="radio" name="status" onChange={setFormData} value="Active" id="radioDefault2"className = "form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                <label htmlFor="radioDefault2" className="inline-block tet-gray-800 ">
                    Inactive
                </label>
            </div>
            </div>
            <button type="submit" className="flex justify-center text-md w-2/6 bg-green-500 px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500">
                Add <span className="px-1"><BiPlus size={24}></BiPlus></span></button>
        </form>
    )
}