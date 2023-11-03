export const UserGreetings=()=>{
    //This is JS we wite it outside the return
    const isLoggedIn=false
    return(
        //<h1>Welcome {isLoggedIn&&'CGG'}</h1>
        <h1>Welcome {isLoggedIn?'CGG':''}</h1>
    )
}