import React, {useState} from 'react';
import axios from 'axios';
import img from '../img/mylogo.png';
import { Link, navigate } from '@reach/router';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    const {reloadBoolean, setReloadBoolean} = props;

    const login = e => { 
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/login", {
            email: email,
            password: password,
        },
        {
            withCredentials: true,
        }
        )
        .then((res) => {
            console.log(res.cookie, "cookie");
            console.log(res, "res");
            console.log(res.data, "res data");
            localStorage.setItem("userId", res.data.userId);
            setReloadBoolean(!reloadBoolean);
            navigate("/movie");
        })
        .catch((err) => {
            setErrors(err.response.data.errors);
            
        });
    };

    return(
        <div className="min-h-screen bg-no-repeat bg-cover bg-center">
                <div className="flex justify-end">
                <div className="min-h-screen w-1/2 bg-cover" style={{backgroundImage: `url(${img})`}}></div>
                    <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
                        <div>
                            <span>{errors ? errors: ""}</span>
                            <form onSubmit={login}>
                                <div>
                                    <span className="text-sm text-gray-900">Let's get to watching!</span>
                                    <h1 className="text-2xl font-bold">Login to your account</h1>
                                </div>
                                <div className="mt-5">
                                    <label className="block text-md mb-2">Email</label>
                                    <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" 
                                    type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mt-5">
                                    <label className="block text-md mb-2">Password</label>
                                    <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" 
                                    type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div>
                                <button className="mt-4 mb-3 w-full bg-blue-500 hover:bg-blue-400 text-white py-2 rounded-md transition duration-100" type="submit">Sign In</button>
                                </div>
                            </form>
                            <Link to="/" style={{color: 'blue'}}>Don't have an account? Register</Link>
                        </div>

                    </div>

                </div>



        </div>
    );


};

export default Login;