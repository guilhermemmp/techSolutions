import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} TechSolutions. <br />Todos os direitos reservados.</p>
                <div className='footer-icons'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/960px-Instagram_icon.png?_=20200512141346" alt="Instagram" className="footer-icon" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/960px-Logo_de_Facebook.png?_=20250202193440" alt="Facebook" className="footer-icon" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png?_=20140125013055" alt="LinkedIn" className="footer-icon" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;