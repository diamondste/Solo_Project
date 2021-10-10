import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link} from '@reach/router';
import Header from './Header';

const UserProfile = (props)=>{

const[userMovie, setUserMovie] = useState([]);
const [userPage, setUserPage] = useState({});
const {id} = props;

useEffect(()=>{
    axios.get(`http://localhost:8000/api/movies/user/${id}`)
    .then((res)=>{
        console.log(res.data);
        setUserMovie(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}, [])

useEffect(()=>{
    axios.get(`http://localhost:8000/api/users/${id}`)
    .then((res)=>{
        console.log(res.data);
        setUserPage(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}, [])

return(
    <div>
        <Header />
        <div className="bg-white shadow overflow-hidden sm:rounded-lg" style={{textAlign:"center"}}>
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {userPage.firstName}'s Profile
                </h3>
                <p className="mt-1 max-w-2x1 text text-sm text-gray-500">
                    {userPage.firstName}'s details
                </p>
            </div>
            <div className="border-t border-gray-200">
            <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Full Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm-col-span-2">
                        {userPage.firstName} {userPage.lastName}
                    </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500"> 
                        Email
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm-col-span-2">
                            {userPage.email}
                    </dd>
                </div>
            </dl>
            </div>
        </div>
        <div className="px-4 py-5 sm:px-6" style={{textAlign:"center"}}>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {userPage.firstName}'s Recommends
                </h3>
        </div>
        {
            userMovie.map((movie, index)=>(
                <div key={index} style={{display: "inline-block",
                margin: "10px",
                height: '200px',
                width:"200px"}}>
                <Link to={`/movie/${movie._id}`}>
                    <img src={movie.image} alt={movie.title} />
                </Link>
                </div>
            ))
        }
    </div>
)




}


export default UserProfile;