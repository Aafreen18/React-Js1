import React from "react";

const Footer = () => {
    const data = new Date();
    const time = data.getFullYear();
    return(
        <footer className="text-center bg-light pt-3">
            <p>©️ {time} Aafreen Parveen : All rights are reserved | Terms and conditions</p>
        </footer>
    )
}

export default Footer;