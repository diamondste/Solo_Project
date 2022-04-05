import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header';

const MovieDetails = props => { 

    const [MovieDetails , setMovieDetails] = useState({});

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${props.id}?api_key=91a9962ed3961f151255c52b3ebc0775&language=en-US`)
        .then((res)=>{
            setMovieDetails(res.data);
        })
        .catch((err)=> {
            console.log(err)
        })
    }, []);

    const getImage = (path) => `https://image.tmdb.org/t/p/w300${path}`;

    return(

        <div style={{textAlign:"center"}}>
            <Header />
            <br />
            <img src={getImage(MovieDetails.poster_path)} style={{height: '300px', width:"200px", marginLeft: "auto", marginRight: "auto"}} alt={MovieDetails.title} />
            <p>Title: {MovieDetails.title} </p>
            <p>Runtime: {MovieDetails.runtime} minutes </p>
            <p>Release Date: {MovieDetails.release_date} </p>
            <p>Rating: {MovieDetails.vote_average} </p>
            <p>Summary: {MovieDetails.overview}</p>
    
        </div>
    )


}

export default MovieDetails;