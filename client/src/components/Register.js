import React, {useState} from 'react';
import axios from 'axios';
import img from '../img/mylogo.png';
import { Link } from '@reach/router';

const Register = props => {
    const [confirm, setConfirm] = useState("");
    const [errors, setErrors] = useState({});

    const [user, setUser] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password:"",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const register = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/register",
            user,
            {
                withCredentials: true,
            }
        )
        .then(res => {
            console.log(res.data);

            setUser({
                username: "",
                firstName: "",
                lastName: "",
                email: "",
                password:"",
                confirmPassword: ""
            })
            setConfirm("Thank you for Registering, you can now log in!");
            setErrors({});
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        });
    }

    return(
        <div className="min-h-screen bg-no-repeat bg-cover bg-center">
                <div className="flex justify-end">
                <div className="min-h-screen w-1/2 bg-cover" style={{backgroundImage: `url(${img})`}}></div>
                    <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
                        <div>
                        {
                            confirm ?
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                            <strong className= "block sm:inline">{confirm}</strong>
                            </div>
                            :null
                        }
                            <form onSubmit={register}>
                                <div>
                                    <span className="text-sm text-gray-900">Let's get to watching!</span>
                                    <h1 className="text-2xl font-bold">Register</h1>
                                </div>
                                <div className="mt-5">
                                    <label className="block text-md mb-2">First Name</label>
                                    {
                                        errors.firstName ?
                                        <p className="text-red-600 md:text-red-600...">{errors.firstName.message}</p>
                                        :null
                                    }
                                    <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" 
                                    type="text" name="firstName" value={user.firstName} onChange={handleChange} />
                                </div>
                                <div className="mt-5">
                                    <label className="block text-md mb-2">Last Name</label>
                                    {
                                        errors.lastName ?
                                        <p className="text-red-600 md:text-red-600...">{errors.lastName.message}</p>
                                        :null
                                    }
                                    <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" 
                                    type="text" name="lastName" value={user.lastName} onChange={handleChange}/>
                                </div>
                                <div className="mt-5">
                                    <label className="block text-md mb-2">User Name</label>
                                    {
                                        errors.username ?
                                        <p className="text-red-600 md:text-red-600...">{errors.username.message}</p>
                                        :null
                                    }
                                    <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" 
                                    type="text" name="username" value={user.username} onChange={handleChange} />
                                </div>
                                <div className="mt-5">
                                    <label className="block text-md mb-2">Email</label>
                                    {
                                        errors.email ?
                                        <p className="text-red-600 md:text-red-600...">{errors.email.message}</p>
                                        :null
                                    }
                                    <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" 
                                    type="text" name="email" value={user.email} onChange={handleChange} />
                                </div>
                                <div className="my-3">
                                <label className="block text-md mb-2">Password</label>
                                {
                                        errors.password ?
                                        <p className="text-red-600 md:text-red-600...">{errors.password.message}</p>
                                        :null
                                    }
                                    <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" 
                                    type="password" name="password" value={user.password} onChange={handleChange} />
                                </div>
                                <div className="my-3">
                                <label className="block text-md mb-2"> Confirm Password</label>
                                {
                                        errors.confirmPassword ?
                                        <p className="text-red-600 md:text-red-600...">{errors.confirmPassword.message}</p>
                                        :null
                                    }
                                    <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" 
                                    type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} />
                                </div>
                                
                                <div>
                                    <button className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100" type="submit">Register</button>
                                </div>
                            </form>
                            <Link to="/login" style={{color: 'blue'}}>Already have an account? Login</Link>
                        </div>

                    </div>

                </div>



        </div>
    )

}

export default Register;