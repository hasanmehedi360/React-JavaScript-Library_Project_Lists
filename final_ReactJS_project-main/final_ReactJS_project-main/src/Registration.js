import { useState } from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

const Registration = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const [msg, setMsg] = useState("");

    const [msg2, setMsg2] = useState("");
    const [msg3, setMsg3] = useState("");
    const [msg4, setMsg4] = useState("");
    const [msg5, setMsg5] = useState("");
    const [msg6, setMsg6] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        var obj = { name: name, username: username, password: password, email: email, address: address };
        axios.post("http://localhost:8000/api/admin/registration", obj).then((succ) => {
            if (succ.data.msg==="Successfully") {
                alert("registration succesfull!");
                window.location="/";
            }
            //setMsg("Registration failed");
        }, (err) => {
            setMsg("Registration failed for Internal Server Problem");
        });
    }
    return (
        <div class="tablebody2">
        <fieldset align="center">
            <br/><br/>
            <h2>Registration</h2>
            <form onSubmit={handleForm} align="center">
                <table border="1" align="center">

                    <tr>
                        <th></th>
                        <th></th>

                    </tr>
                    <tr>
                        <td >
                            <span>Admin-name </span>
                        </td>

                        <td >
                            <input type="text" value={name} onChange={function (e) { setName(e.target.value) }} placeholder="Name" required></input><br />
                            <span className='text-danger'>{msg3}</span><br />
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <span>username </span>
                        </td>

                        <td >
                            <input type="text" value={username} onChange={function (e) { setUsername(e.target.value) }} placeholder="username" required></input><br />
                            <span className='text-danger'>{msg2}</span><br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>password </span>
                        </td>
                        <td>
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" required></input><br />
                            <span className='text-danger'>{msg4}</span><br />
                        </td>
                    </tr>

                    <tr align="center">
                        <td>
                            <button type="submit" ><Link to="/">Login</Link> </button>
                            <button>Register</button>
                        </td>
                        <td><span className='text-danger'>{msg}</span></td>
                    </tr>
                </table>
            </form>
        </fieldset>
        </div>
    )
}
export default Registration;
