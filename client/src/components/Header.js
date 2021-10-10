import React, { useEffect, useState } from 'react';
import axios from 'axios';
import images from '../img/headerlogo.png'
import {navigate} from '@reach/router';

const Header = (props)=>{
    
    const [currentUserId, setCurrentUserId] = useState("");
    const {reloadBoolean} = props;

    const logout = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/logout", {

            },
            {
                withCredentials: true,
            })
            .then((res) => {
                setCurrentUserId("");
                localStorage.removeItem("userId");
                navigate("/login");
            })
            .catch(err => {
                console.log(err);
            })
        
    };

    useEffect(() =>{
        setCurrentUserId(localStorage.getItem("userId"));
    }, [reloadBoolean])


    return(
        <div>
            <nav className="bg-white dark:bg-gray-800 shadow">
                <div className="max-w-7x1 mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="w-full justify-between flex items-center">
                            <img className="flex-shrink-0 h-8 w-8" src={images} alt="What?" />
                            <div className="hidden md:block">
                                <div className="m1-10 flex items-baseline space-x-4">
                                    <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2
                                    rounded-md text-sm font-medium " href="/movie">
                                        Home
                                    </a>
                                    <a className="text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-white 
                                    px-3 py-2 rounded-md text-sm font-medium " href="/movie/new">
                                        Create
                                    </a>
                                    <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2
                                    rounded-md text-sm font-medium " href={`/user/profile/${currentUserId}`}>
                                        Account
                                    </a>
                                    <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2
                                    rounded-md text-sm font-medium "onClick={logout}>
                                        Logout
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="ml-4 flex items-center md:ml-6">
                            </div>
                        </div>
                        <div className="mr-2 flex md:hidden">
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2
                                    rounded-md text-sm font-medium " href="/movie">
                                        Home
                                    </a>
                                    <a className="text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-white 
                                    px-3 py-2 rounded-md text-sm font-medium " href="/movie/new">
                                        Create
                                    </a>
                                    <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2
                                    rounded-md text-sm font-medium " href="/user/profile/:id">
                                        Account
                                    </a>
                                    <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2
                                    rounded-md text-sm font-medium "onClick={logout}>
                                        Logout
                                    </a>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default Header;