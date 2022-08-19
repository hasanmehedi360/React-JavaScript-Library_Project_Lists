import { useState } from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

const Registration = () => {
    const [user_id, setUser_Id] = useState("");
    const [parent_id, setParant_Id] = useState("");
    const [class_id, setClass_Id] = useState("");
    const [roll_number, setRoll_Number] = useState("");
    const [gender, setGender] = useState("");

    const [phone, setPhone] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [current_address, setCurrent_Address] = useState("");
    const [permanent_address, setPermanent_Address] = useState("");
    const [created_at, setCreated_At] = useState("");
    const [updated_at, setUpdated_At] = useState("");

    const [msg, setMsg] = useState("");

    const [msg2, setMsg2] = useState("");
    const [msg3, setMsg3] = useState("");
    const [msg4, setMsg4] = useState("");
    const [msg5, setMsg5] = useState("");
    const [msg6, setMsg6] = useState("");
    const [msg7, setMsg7] = useState("");
    const [msg8, setMsg8] = useState("");
    const [msg9, setMsg9] = useState("");
    const [msg10, setMsg10] = useState("");
    const [msg11, setMsg11] = useState("");
    const [msg12, setMsg12] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        var obj = { 
                user_id: user_id, 
                parent_id: parent_id, 
                class_id: class_id, 
                roll_number: roll_number, 
                gender: gender,
                phone: phone,
                dateofbirth: dateofbirth,
                current_address: current_address,
                permanent_address: permanent_address,
                created_at: created_at,
                updated_at: updated_at
            };
        axios.post("http://localhost:8000/api/student/registration", obj).then((succ) => {
            if (succ.data.msg==="Successfully") {
                alert("registration succesfull!");
                window.location="/student/login";
            }
                // setMsg("Registration failed");
        }, (err) => {

            setMsg("Registration failed for INternal Server Problem");
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
                            <span>User_Id</span>
                        </td>

                        <td >
                            <input type="text" value={user_id} onChange={function (e) { setUser_Id(e.target.value) }} placeholder="User_Id" required></input><br />
                            <span className='text-danger'>{msg3}</span><br />
                        </td>
                    </tr>

                    <tr>
                        <td >
                            <span>Parent_Id </span>
                        </td>

                        <td >
                            <input type="text" value={parent_id} onChange={function (e) { setParant_Id(e.target.value) }} placeholder="Parent_Id" required></input><br />
                            <span className='text-danger'>{msg2}</span><br />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span>Class_Id </span>
                        </td>
                        <td>
                            <input type="text" value={class_id} onChange={(e) => { setClass_Id(e.target.value) }} placeholder="Class_Id" required></input><br />
                            <span className='text-danger'>{msg4}</span><br />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span>Roll_Number </span>
                        </td>
                        <td> 
                            <input type="text" value={roll_number} onChange={(e) => { setRoll_Number(e.target.value) }} placeholder="Roll_Number" required></input><br />
                            <span className='text-success'>{msg5}</span><br />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span>Gender</span>
                        </td>
                        <td> 
                            <input type="text" value={gender} onChange={(e) => { setGender(e.target.value) }} placeholder="Gender" required></input><br />
                            <span className='text-success'>{msg6}</span><br /> 
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span>Phone</span>
                        </td>
                        <td> 
                            <input type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="Phone" required></input><br />
                            <span className='text-success'>{msg7}</span><br /> 
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <span>DateOfBirth</span>
                        </td>
                        <td> 
                            <input type="text" value={dateofbirth} onChange={(e) => { setDateofbirth(e.target.value) }} placeholder="DateOfBirth" required></input><br />
                            <span className='text-success'>{msg8}</span><br /> 
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <span>Current_Address</span>
                        </td>
                        <td> 
                            <input type="text" value={current_address} onChange={(e) => { setCurrent_Address(e.target.value) }} placeholder="Current_Address" required></input><br />
                            <span className='text-success'>{msg9}</span><br /> 
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <span>Permanent_Address</span>
                        </td>
                        <td> 
                            <input type="text" value={permanent_address} onChange={(e) => { setPermanent_Address(e.target.value) }} placeholder="Permanent_Address" required></input><br />
                            <span className='text-success'>{msg10}</span><br /> 
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span>Created_At</span>
                        </td>
                        <td> 
                            <input type="text" value={created_at} onChange={(e) => { setCreated_At(e.target.value) }} placeholder="Created_At" required></input><br />
                            <span className='text-success'>{msg11}</span><br /> 
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <span>Updated_At</span>
                        </td>
                        <td> 
                            <input type="text" value={updated_at} onChange={(e) => { setUpdated_At(e.target.value) }} placeholder="Updated_At" required></input><br />
                            <span className='text-success'>{msg12}</span><br /> 
                        </td>
                    </tr>




                    <tr >
                        <td>
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
