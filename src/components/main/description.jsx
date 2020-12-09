import React from 'react';

function Description(props){
    const {explain} = props;

    return(
        <div className='desc'>
            <p>{explain}</p>
        </div>
    )
}
export default Description;