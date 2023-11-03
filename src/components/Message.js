import { useState } from "react"

export const Message=()=>{
    //message is a state variable
     const [message,setMessage]=useState('Welcome to the visitor')
    return(
        <div>
            <h1>
                {message}
            </h1>
            <button onClick={()=>setMessage('Thank you for subscribing')}>Subscribe</button>
        </div>
    )
}