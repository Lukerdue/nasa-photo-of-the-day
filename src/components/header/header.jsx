import React from 'react';
import Nav from './nav';
import styled from 'styled-components';

function Header(){
    return(
        <Headerstyle>
            <div className="imgwrapper">
                <img src={require("../../img/space_logo.png")}/>
            </div>
            <h1>Photo of the Day</h1>
            <Nav/>
        </Headerstyle>
    )
}
export default Header

const Headerstyle = styled.header`
display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  color: navy;
  border-bottom: 2px solid gold;

  .imgwrapper{
    width: 15%;
  }
  img{
    max-width: 100%;
  }
`