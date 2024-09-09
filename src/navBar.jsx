import React from 'react'
import {Link} from 'react-router-dom'
export default function NavBar () {
 
return (
    <nav>
      <h1 className='flex text-lg relative top-2 text-orange-600	justify-start text-center '>Raouf<span className='text-black'>kh</span></h1>
      
       <ul>
        <div>
        <div className='w-full text-lg flex space-x-12 justify-center relative	 bottom-4'>
          <li>
           <Link className='bold  text-orange-600 focus:text-blue-600' to="/Tech">Home</Link>
           </li>
           
           <li> 
            <Link className='bold   text-orange-600 focus:text-blue-600' to ="/post/time">Post</Link>

            
            
           </li>
           <li>
            <Link  className='bold  text-orange-600 focus:text-blue-600 ' to ="/">sign in</Link>
          </li>
           </div>
           <li> 

            
            
           </li>
         </div>  
       </ul>
      
    </nav>
  )
}
