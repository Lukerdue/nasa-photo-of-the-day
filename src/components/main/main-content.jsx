import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Description from './description'

function MainContent (){
    const [photo, setPhoto] = useState({})
    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(res=>{
                console.log(res.data);
                setPhoto(res.data)
            })
            .catch(res=>{
                console.log(res);
            })
    }, [])

    return(
    <div>
        <ReactPlayer url={photo.url}/>
        <Description explain={photo.explanation}/>
    </div>
    )
}
export default MainContent;