import React from 'react';
import Picture from './picture';

function PictureWrapper({props}){
    const {url, media_type} = props;
    return(
        <div>
            <Picture url={url} media={media_type}/>
        </div>
    )
}
export default PictureWrapper