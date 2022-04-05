import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link} from '@reach/router';
import Header from './Header';


const Dashboard = props => {
    const [showList, setShowList] = useState([]);


    useEffect(()=> { 
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=91a9962ed3961f151255c52b3ebc0775&language=en-US&page=2')
        .then((res)=>{
            setShowList(res.data.results);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const getImage = (path) => `https://image.tmdb.org/t/p/w300${path}`;
    

    const [reloadBoolean, setReloadBoolean] = useState(false);
    
    return(
        <div>
            <Header setReloadBoolean={setReloadBoolean} reloadBoolean={reloadBoolean}/>
            <br />
            
            <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">Now Playing</h1>

            {
                showList.length > 0 && showList.map((show, index)=>(
                    <div key={index} style={{display: "inline-block",
                    margin: "30px",
                    height: '500px' }}>
                    <Link to={`/movie/${show.id}`}>
                        <img src = {getImage(show.poster_path)}/>
                    </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Dashboard;
