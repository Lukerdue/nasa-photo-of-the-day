import React from 'react';
import ReactPlayer from 'react-player';

function Picture(props){
    console.log(props)
    const {url, media} = props;
    if(media === "video"){
        return (
            <ReactPlayer url={url} className="video"/>
        )
    }
    else{
        return(
            
            <img src={url}className="picture"/>
        )
    }
}
export default Picture