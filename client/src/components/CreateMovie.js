import React, {useState} from 'react';
import axios from 'axios';
import Header from './Header';
import { navigate } from '@reach/router';

const CreateMovie = (props)=>{
    const [errors, setErrors] = useState({});
    const [newMovie, setNewMovie] = useState({
        title: "",
        type: "",
        genre: "",
        year: "",
        image: "",
        summary: "",
        rating: ""
    })

    

    const handleChange = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/movies',

        newMovie,
        {
            withCredentials: true
        }
        )
        .then((res)=>{
            console.log(res.data);
            setNewMovie({
                title: "",
                type: "",
                genre: "",
                year: "",
                image: "",
                rating: "",
                summary: ""
            })
            navigate('/movie')
        })
        .catch((err)=>{
            console.log(err);
            console.log(err.reponse.data.errors);
            if(err.response.status === 401){
                navigate("/")
            }
            if(err.response.data.errors){
                setErrors(err.response.data.errors);
            }
        })
    }

    return(
        <div>
            <Header/>
            <div className="w-full bg-gray-300">
            <div className="container mx-auto py-8">
            <div className="w-96 mx-auto bg-white rounded shadow">
            <div className="mx-16 py-4 px-8 text-blck text-x1 font-bold border-b border-grey-500">
                    Create Movie or Tv Show
                </div> 
                <form onSubmit={onSubmitHandler}>
                    <div className="py-4 px-8">

                        <div className="mb-4">
                            <label className="block text-grey-darker text-md font-bold mb-2">Title</label>
                            {
                                        errors.title ?
                                        <p className="text-red-600 md:text-red-600...">{errors.title.message}</p>
                                        :null
                            }
                            <input className="border rounded w-full py-2 px-3 text-grey-darker"  type="text"
                            name="title" value={newMovie.title} placeholder="Enter in a Title" onChange={handleChange}/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-md font-bold mb-2">Type</label>
                            {
                                        errors.type ?
                                        <p className="text-red-600 md:text-red-600...">{errors.type.message}</p>
                                        :null
                            }
                            <select className="border rounded w-full py-2 px-3 text-grey-darker"
                            name="type" value={newMovie.type} onChange={handleChange}>
                                <option value="none" defaultValue hidden>
                                    Select an Type
                                </option>
                                    <option value="Movie">Movie</option>
                                    <option value="TV Show">Tv Show</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-md font-bold mb-2">Genre</label>
                            {
                                        errors.genre ?
                                        <p className="text-red-600 md:text-red-600...">{errors.genre.message}</p>
                                        :null
                            }
                            <select className="border rounded w-full py-2 px-3 text-grey-darker"
                            name="genre" value={newMovie.genre} onChange={handleChange}>
                                <option value="none" defaultValue hidden>
                                    Select an Genre
                                </option>
                                    <option value="Action">Action</option>
                                    <option value="Animation">Animation</option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Crime">Crime</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Fantasy">Fantasy</option>
                                    <option value="Historical">Historical</option>
                                    <option value="Experimental">Experimental</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Science Fiction">Science Fiction</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="Western">Western</option>
                                    <option value="Other">Other</option>
                                    
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-md font-bold mb-2">Year</label>
                            {
                                        errors.year ?
                                        <p className="text-red-600 md:text-red-600...">{errors.year.message}</p>
                                        :null
                            }
                            <input className="border rounded w-full py-2 px-3 text-grey-darker"  type="number"
                            name="year" value={newMovie.year} placeholder="Enter in a Year" onChange={handleChange}/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-md font-bold mb-2">Image Url</label>
                            {
                                        errors.image ?
                                        <p className="text-red-600 md:text-red-600...">{errors.image.message}</p>
                                        :null
                            }
                            <input className="border rounded w-full py-2 px-3 text-grey-darker"  type="text"
                            name="image" value={newMovie.image} placeholder="Enter in Image URL" onChange={handleChange}/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-md font-bold mb-2">Rating</label>
                            {
                                        errors.rating ?
                                        <p className="text-red-600 md:text-red-600...">{errors.rating.message}</p>
                                        :null
                            }
                            <input className="border rounded w-full py-2 px-3 text-grey-darker"  type="number"
                            name="rating" value={newMovie.rating} placeholder="Enter in a Rating" onChange={handleChange}/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-md font-bold mb-2">Summary</label>
                            {
                                        errors.summary ?
                                        <p className="text-red-600 md:text-red-600...">{errors.summary.message}</p>
                                        :null
                            }
                            <textarea className="border rounded w-full py-2 px-3 text-grey-darker"  rows="5" cols="60"
                            name="summary" value={newMovie.summary} onChange={handleChange}>
                            </textarea>
                        </div>

                        <div className="mb-4">
                            <button type="submit" className="mb-2 mx-16 rounded-full py-1 px-24 bg-gradient-to-r from-gray-400 to-blue-500">
                                Create
                            </button>
                        </div>
                        
                        

                    </div>
                </form>

            </div>
            </div>

            </div>

        </div>
    )
}

export default CreateMovie;