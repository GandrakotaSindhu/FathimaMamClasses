import React from "react"

export const Hello=()=>{
    return(
        //This is JSX-javascript representation of XML
        // <div id='hello' classNmae='dummyClass'>
        //     <h1>
        //         Hello participants
        //     </h1>
        // </div>
        //JavaScript
        React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement('h1',null,"Hello Participants"))
    )
}