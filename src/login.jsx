import React, { useContext, useState } from "react"
import { MyContext } from './context'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [name,setName]=useState("")
    const[email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {user,login,Logout}=useContext(MyContext)
    const navigate = useNavigate(); 
    const HandleSubmit = (e)=>{
        e.preventDefault()
        login({email,name})
        navigate('/Tech')
        
       
    }
         
        
  return ( 
    <div className=" max-w-4xl	m-auto flex ">
        <div className=" rounded-lg border-white-8 flex flex-1  ">                       
        <form className=" font-mono flex justify-center	items-center flex-col space-y-6	" onSubmit={HandleSubmit}>
       <h1 className="text-orange-600 ml-8	text-center	text-lg" >please Sign In ! Thanks</h1>
        <div className="flex  items-center space-x-4">
        <label for="name" class="text-orange-600 w-8 mx-4">Name:</label>
        <input className="  w-80 border flex- border border-gray-300 rounded-lg p-4" type="text"  value={name}  onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="flex items-center space-x-4">
        <label for="email" className="text-orange-600 w-8 mx-4">Email:</label>
         <input className=" border flex-1 w-80 border-gray-300 rounded-lg p-4"  type="text"  value={email}  onChange={(e)=>setEmail(e.target.value)} />
         </div>
        <button className="flex bg-orange-600 text-white rounded px-4 ml-8 py-2" type='Submit'>Login</button>
        
        </form>
        </div>
        
        <div className=" flex flex-col p-auto items-center rounded-lg font-mono h-96 w-32 flex-1 border-white-8	bg-orange-600">
              <h1 className="align-middle	pt-10 text-center	text-3xl		text-white	">Welcome Dear !</h1>
              <h1 className="align-middle	pt-10 text-center	text-3xl		text-white	">Sigh In to See Post !</h1>
              
       </div>      
    </div>
  )
}
