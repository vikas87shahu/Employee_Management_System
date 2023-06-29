import { BiEdit,BiTrashAlt } from "react-icons/bi"
import { deleteUser, getUser } from "../lib/helper"
import { useQuery } from "react-query"
import { useSelector,useDispatch } from "react-redux";
import { toggleChangeAction, updateAction,deleteAction } from "../redux/reducer";
// import {toggleForm} from ''
export default function(){
  
  // console.log(state)
  //  getUser().then(res=>console.log(res))
  const {isLoading,isError,data,error} = useQuery('users',getUser);
  if(isLoading) return <div>Employee Data Loading</div>
  if(isError) return <div>Got Error {error}</div>
  
    return(
        <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-16 py-2">
                 <span className="text-gray-200">Name</span>
            </th>
            <th className="px-16 py-2">
                 <span className="text-gray-200">Email</span>
            </th>
            <th className="px-16 py-2">
                 <span className="text-gray-200">Salary</span>
            </th>
            <th className="px-16 py-2">
                 <span className="text-gray-200">Birthday</span>
            </th>
            <th className="px-16 py-2">
                 <span className="text-gray-200">Status</span>
            </th>
            <th className="px-16 py-2">
                 <span className="text-gray-200">Action</span>
            </th>
          </tr>
        </thead>
        
        <tbody className="bg-gray-200">
         {
          data.users.map((obj,i)=><Tr {...obj} key={i}/>)
         }
        </tbody>
        </table>
    )
}
function Tr({_id,name,email,salary,date,status}){
  const visible = useSelector((state)=>state.app.client.toggleForm);
  const dispatch = useDispatch();
  const onUpdate = ()=>{
    dispatch(toggleChangeAction(_id))
    if(visible){
      dispatch(updateAction(_id))
    }
    console.log(visible)
  }
  const onDelete =()=>{
  
    if(!visible){
      console.log(_id)
      deleteUser(_id);
      dispatch(deleteAction(_id))
    }
  }
  return(
    <tr className="bg-gray-50 text-center">
    <td className="px-16 py-2">
        <span className="text-center ml-2 font-semibold">{name}</span>
    </td>
    <td className="px-16 py-2">
        <span>{email}</span>
    </td>
    <td className="px-16 py-2">
        <span>{salary}</span>
    </td>
    <td className="px-16 py-2">
        <span>{date}</span>
    </td>
    <td className="px-16 py-2">
        <button className="cursor"><span className={`${status=='Active'?'bg-green-500':'bg-rose-500'} text-white px-5 py-1 rounded`}>{status}</span></button>
    </td>
    <td className="px-16 py-2 flex justify-around gap-5">
        <button className="cursor" onClick={onUpdate}><BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit></button>
        <button className="cursor" onClick={onDelete}><BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt></button>
    </td>
  </tr>
  )
}