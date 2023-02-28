export default function Login(){

    return(
        <div>
            <form className="loginForm">  
                <div className="container">   
                    <label>Username : </label>   
                    <input type="text" placeholder="Enter Username" name="username" required/>  
                    <label>Password : </label>   
                    <input type="password" placeholder="Enter Password" name="password" required/>  
                    <button type="submit">Login</button>    
                    <input type="checkbox" checked="checked" readOnly/>Remember me  <br /> 
                    <a href="/">Forgot password? </a>   
                </div>   
            </form>
        </div>     
    );
}