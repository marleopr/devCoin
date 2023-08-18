import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaWhatsapp } from 'react-icons/fa';
import brapiLogo from "../assets/brapiFooter.png"

const Footer = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bottom: 0, width: "100%", boxSizing: 'border-box', textAlign: 'center' }}>
            <div className="card-footer" style={{ margin: "20px" }}>
                <a className="social-link1"
                    href="https://github.com/marleopr"
                    alt="GitHub"
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a className="social-link2"
                    href="https://www.linkedin.com/in/marleopiber/"
                    alt="Linkedin"
                    title="Linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />        </a>
                <a className="social-link3"
                    href="https://marleo-portfolio.vercel.app/"
                    alt="Portfólio"
                    title="Portfólio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGlobe />
                </a>
                <a className="social-link4"
                    href="https://whats.link/marleopr"
                    alt="WhatsApp"
                    title="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", textAlign: 'center' }}>
                <p style={{ margin: 0, color: 'white' }}>
                    Márleo Piber • Full Stack Developer © 2023 •
                    Desenvolvido com a API
                    <a href={'https://brapi.dev/'} target="_blank" rel="noopener noreferrer">
                        <img style={{ width: "40px", marginLeft: "5px" }} src={brapiLogo} alt='Brapi' />
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
