import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header';

const MovieDetails = (props)=> { 

    const [MovieDetails , setMovieDetails] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movies/${props.id}`)
        .then((res)=>{
            setMovieDetails(res.data);
        })
        .catch((err)=> {
            console.log(err)
        })
    }, []);

    return(

        <div style={{textAlign:"center"}}>
            <Header />
            <img src={MovieDetails.image} style={{height: '300px', width:"200px", marginLeft: "auto", marginRight: "auto"}} alt={MovieDetails.title} />
            <p>Title: {MovieDetails.title} </p>
            <p>Type: {MovieDetails.type} </p>
            <p>Genre: {MovieDetails.genre} </p>
            <p>Year: {MovieDetails.year} </p>
            <p>Rating: {MovieDetails.rating} </p>
            <p>Summary: {MovieDetails.summary}</p>
        </div>
    )


}

export default MovieDetails;