import { useState } from "react";

function LoginControl(){


    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const handleLoggedIn =()=>setIsLoggedIn(true)
    const handleLoggedOut =()=>setIsLoggedIn(false)
    const style = {
        color: isLoggedIn ? 'red' : 'blue',
        cursor: 'pointer',
      };
    return(
        <div>
            {isLoggedIn ?(
                <button onClick={handleLoggedOut}>Logout</button>

            ):(
                <button onClick={handleLoggedIn}>Login</button>

            )}

            <h1 style={style}>{isLoggedIn? 'Welcome back' : "please Login"}</h1>
        </div>  
    )
}

export default LoginControl;