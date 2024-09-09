import { useState } from "react";

function LoginControl(){


    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const handleLoggedIn =()=>setIsLoggedIn(true)
    const handleLoggedOut =()=>setIsLoggedIn(false)

    return(
        <div>
            {isLoggedIn ?(
                <button onClick={handleLoggedOut}>Logout</button>

            ):(
                <button onClick={handleLoggedIn}>Login</button>

            )}

            <h1>{isLoggedIn? 'Welcome back' : "please Login"}</h1>
        </div>  
    )
}

export default LoginControl;