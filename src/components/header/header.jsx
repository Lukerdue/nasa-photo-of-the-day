import React from 'react';
import Nav from './nav';

function Header(){
    return(
        <header>
            <div className="imgwrapper">
                <img src={require("../../img/space_logo.png")}/>
            </div>
            <h1>Photo of the Day</h1>
            <Nav/>
        </header>
    )
}
export default Header