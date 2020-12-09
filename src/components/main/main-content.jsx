import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Description from './description';
import PictureWrapper from './picture/pictureWrapper'

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
        <PictureWrapper props={photo}/>
        <Description explain={photo.explanation}/>
    </div>
    )
}
export default MainContent;