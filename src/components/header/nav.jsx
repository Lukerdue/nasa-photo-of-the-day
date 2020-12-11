import React from 'react';
import styled from 'styled-components';

function Nav (){
    return(
        <Navstyle>
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
            <a href="#">Copyright</a>
        </Navstyle>
    )
}
export default Nav

const Navstyle = styled.nav`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: bottom;
    justify-content: space-around;
    color: navy;
  a:hover{
    color: gray;
    cursor: pointer;
  }
`