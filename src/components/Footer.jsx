import React from 'react';
import "../styles/Footer.css";


function Footer() {
    return (
        <footer style={{ backgroundColor: '#252B48', color: '#fff', padding: '2px', display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                    <h1 style={{ color: '#ddd', fontSize:"large", marginBottom:"0px"}}><span style={{ color: 'white' }}>Seven</span> <span style={{ color: '#9d174d' }}>Stones</span></h1>
               
                <p style={{ textAlign: 'center' , fontSize:"small", margin:"0", padding:"0"}}>&copy; {new Date().getFullYear()} Seven Stones Inc. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
