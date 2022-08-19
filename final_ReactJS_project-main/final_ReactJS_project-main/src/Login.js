import { useState } from 'react';
import { Link, matchRoutes } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");
    const [msg2, setMsg2] = useState("");
    const [msg3, setMsg3] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        var obj = { username: uname, password: pass };
        axios.post("http://127.0.0.1:8000/api/admin/login", obj).then((succ) => {
            if (succ.data.logged_admin) {
                setMsg("Login Successfull");
                window.location="/dashboard";
                if (succ.data.logged_session) {
                    alert("welcome "+succ.data.logged_session );
                    <td id="nav"> <Link to="/">Logout</Link> </td>
                }
            }
            else {
                if (succ.data.username !== uname | succ.data.password !== pass) {
                    setMsg2(succ.data.username);
                    setMsg3(succ.data.password);
                }
                setMsg(<h6>USERNAME AND PASSWORD DOESN'T MATCH!</h6>);
            }
        }, (err) => {

            setMsg("Login failed for INTERNAL SERVER PROBLEM");
        });
    }

    return (
        <div align="center">

            <div id="loginbody"  >


                <fieldset align="center">

                    <br/><br/>
                    <h2>Login</h2>
                    <span className='text-success'>{msg}</span> <br/>
                    <form onSubmit={handleForm} align="center">
                        <input type="text" value={uname} onChange={function (e) { setUname(e.target.value) }} placeholder=" Enter your Username." required ></input><br />
                        <span className='text-danger'>{msg2}</span><br />

                        <input type="password" value={pass} onChange={(e) => { setPass(e.target.value) }} placeholder=" Enter your Password." required ></input><br />
                        <span className='text-danger'>{msg3}</span>
                        
                        <br/>
                        <button type="submit" ><Link to="/regis"> sign up</Link> </button>
                        <button type="submit" >login </button>
                    </form>

                </fieldset>
            </div>
        </div>
    )
}
export default Login;
