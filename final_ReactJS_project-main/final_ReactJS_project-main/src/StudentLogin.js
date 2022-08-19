import { useState } from 'react';
import { Link, matchRoutes } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [user_id, setUser_Id] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");
    const [msg2, setMsg2] = useState("");
    const [msg3, setMsg3] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        var obj = { user_id: user_id, phone: phone };
        axios.post("http://127.0.0.1:8000/api/student/login", obj).then((succ) => {
            if (succ.data.logged_admin) {
                setMsg("Login Successfull");
                window.location="/student/dashboard";
                if (succ.data.logged_session) {
                    alert("welcome "+succ.data.logged_session );
                    <td id="nav"> <Link to="/">Logout</Link> </td>
                }
            }
            else {
                if (succ.data.user_id !== user_id | succ.data.phone !== phone) {
                    setMsg2(succ.data.user_id);
                    setMsg3(succ.data.phone);
                }
                setMsg(<h6>USER_ID AND PHONE NUMBER DOESN'T MATCH!</h6>);
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
                        <input type="text" value={user_id} onChange={function (e) { setUser_Id(e.target.value) }} placeholder="User ID" required ></input><br />
                        <span className='text-danger'>{msg2}</span><br />

                        <input type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="Phone Number" required ></input><br />
                        <span className='text-danger'>{msg3}</span>
                        
                        <br/>
                        <button type="submit" ><Link to="/student/registration"> sign up</Link> </button>
                        <button type="submit" >login </button>
                    </form>

                </fieldset>
            </div>
        </div>
    )
}
export default Login;
