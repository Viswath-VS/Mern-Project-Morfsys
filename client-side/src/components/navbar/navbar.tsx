import React from 'react';
import "./navbar.scss";
interface Props {
    
}

 const Navbar = (props: Props) => {
    return (
        <div className="home-navbar-container">
           <h1>Shenzhen Houde Academy</h1> 
           <div className="navbar-section">
               <h3>DISCOVER</h3>
               <h3>IMPACT BOARD</h3>
               <h3>LEARNING PODS</h3>
           </div>
        </div>
    )
}

export default Navbar ;