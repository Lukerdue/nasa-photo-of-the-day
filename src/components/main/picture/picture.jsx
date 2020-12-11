import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

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
            
            <Pic src={url}className="picture"/>
        )
    }
}
export default Picture

const Pic = styled.img`
width: 100%;
`