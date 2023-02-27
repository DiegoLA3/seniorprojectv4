import React from 'react';
import "./Footer.css"

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <br /><hr />
                    <div className="col">
                        <h2>Ram & Bytes</h2>
                        <br />
                        <ul className="list">
                            <nav>University of Washington Tacoma</nav>
                            <nav>253-692-4000</nav>
                            <nav>1900 Commerce St.</nav>
                            <nav>Tacoma, WA</nav>
                        </ul>
                    </div>
                </div>
                
                <br />
                <div className="row">
                    <nav className="col-sm">
                        &copy;{new Date().getFullYear()} Ram & Bytes | ALL RIGHTS RESERVED | PRIVACY NOTICE | CONTACT US, BUT DON'T PLS
                    </nav>
                </div>
             </div> 
        </div>    
    )
}

export default Footer;