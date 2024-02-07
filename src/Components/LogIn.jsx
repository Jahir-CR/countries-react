import { useState } from "react";
import "./LogIn-styles.css";
import { useNavigate } from "react-router-dom";

const LogIn = () =>{

    const navigate = useNavigate();
    const userDB = { "username": "pablo", "password":  "123456"};
    const [user, setUser] = useState({username : "", password:""});    

    const validate = async () =>{
        const userName = document.querySelector('.username').value;
        const userPassword = document.querySelector('.password').value;
        
        setUser({username:userName, password:userPassword});
        console.log(user);
        
        

        if(userDB.username === user.username && userDB.password === user.password){
            const storedUser = localStorage.setItem('user', JSON.stringify(user));
            console.log("usuario correcto");
            navigate('../SearchCountries');
        }
        else{
            console.log("usuario incorrecto");
        }
    }

    return (
    <>
    <h1>Login</h1>
    <div>
        <label><b>Username</b></label>
        <input className = "username" type="text" required/>
    </div>
    <div>
        <label><b>Password</b></label>
        <input className = "password" type="password" required/>
    </div>
        <button className="submit" type="submit" onClick={validate}>Login</button>

    </>
    );
}

export default LogIn;


