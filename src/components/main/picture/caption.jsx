import React from 'react';
import styled from 'styled-components';

function Caption (props){
    const{title, date} = props;
    return(
        <Cap>
            <p>{title}</p>
            <p>Today's date: {date}</p>
        </Cap>
    )
}
export default Caption

const Cap = styled.div`
display: flex;
justify-content: space-around;
`