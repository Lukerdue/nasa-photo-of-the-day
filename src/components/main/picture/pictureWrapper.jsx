import React from 'react';
import Picture from './picture';
import Caption from './caption';
import styled from 'styled-components';

function PictureWrapper({props}){
    const {url, media_type, date, title} = props;
    return(
        <PicWrapper>
            <Picture url={url} media={media_type}/>
            <Caption date={date} title={title}/>
        </PicWrapper>
    )
}
export default PictureWrapper

const PicWrapper = styled.div`
background-color: dodgerblue;
width: 50%;
padding: 3%;
margin: 5%;
border-radius: 45px;
border-bottom: 2px solid gold;
border-top: 2px solid gold;
`