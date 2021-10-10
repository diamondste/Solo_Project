import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link} from '@reach/router';
import Header from './Header';

const Dashboard = (props)=> {
    const [showList, setShowList] = useState([]);

    useEffect(()=> { 
        axios.get('http://localhost:8000/api/movies')
        .then((res)=>{
            setShowList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const [reloadBoolean, setReloadBoolean] = useState(false);
    
    return(
        <div>
            <Header setReloadBoolean={setReloadBoolean} reloadBoolean={reloadBoolean}/>
            <br />
            {
                showList.map((show, index)=>(
                    <div key={index} style={{display: "inline-block",
                    margin: "10px",
                    height: '200px',
                    width:"200px"}}>
                    <Link to={`/movie/${show._id}`}>
                        <img src={show.image} alt={show.title}/>
                    </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Dashboard;
