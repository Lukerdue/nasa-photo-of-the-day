import React from 'react';
import styled from 'styled-components';

function Description(props){
    const {explain} = props;

    return(
        <Desc>
            <p>{explain}</p>
        </Desc>
    )
}
export default Description;

const Desc = styled.div`
width: 75%;
background-color: dodgerblue;
display: flex;
justify-content: center;
align-items: center;
margin: 2%;
border-radius: 100%;
border: 2px solid gold;

p{
padding: 10%;
margin: 4%;
}

`