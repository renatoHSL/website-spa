import React from 'react';
import './Footer.css'; // Importa o arquivo de estilo CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Seção de links importantes */}
                <div className="footer-links">
                    <a href="/about">Sobre nós</a>
                    <a href="/services">Serviços</a>
                    <a href="/contact">Contato</a>
                    <a href="/privacy-policy">Política de Privacidade</a>
                </div>

                {/* Seção de redes sociais */}
                <div className="footer-social">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i> {/* Ícone do Facebook */}
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i> {/* Ícone do Instagram */}
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i> {/* Ícone do Twitter */}
                    </a>
                </div>

                {/* Seção de direitos autorais */}
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} SPA Beleza. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
