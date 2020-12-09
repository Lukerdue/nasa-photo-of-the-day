import React from 'react';
import Picture from './picture';
import Caption from './caption'

function PictureWrapper({props}){
    const {url, media_type, date, title} = props;
    return(
        <div className="pictureWrapper">
            <Picture url={url} media={media_type}/>
            <Caption date={date} title={title}/>
        </div>
    )
}
export default PictureWrapper