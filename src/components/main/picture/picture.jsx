import React from 'react';
import ReactPlayer from 'react-player';

function Picture(props){
    console.log(props)
    const {url, media} = props;
    if(media === "video"){
        debugger
        return (
            <ReactPlayer url={url}/>
        )
    }
    else{
        debugger
        return(
            
            <img src={url}/>
        )
    }
}
export default Picture