import React from 'react';

function Caption (props){
    const{title, date} = props;
    return(
        <div className="caption">
            <p>{title}</p>
            <p>Today's date: {date}</p>
        </div>
    )
}
export default Caption