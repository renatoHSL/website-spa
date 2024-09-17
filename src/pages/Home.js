import React from 'react';
import './Home.css'; // Importa o arquivo de estilo CSS
import spaImage from '../assets/home/main_video/mainphoto.png'; // Importa a imagem para ser usada no componente
import placeholder from '../assets/home/placeholder/placeholder.png';

const Home = () => {
    return (
        <div>
            <main>
                {/* Adicionando a imagem no centro da tela */}
                <div className="video-container">
                    <img src={spaImage} alt="Serviço de Spa" /> {/* Exibe a imagem importada com texto alternativo */}
                </div>
                <div className="about-us-container">
                    {/* Texto e botão à esquerda */}
                    <div className="about-us-text-container">
                        <h2>Conheça nossa História</h2>
                        <p>Oferecemos os melhores serviços de spa para relaxamento e bem-estar. Descubra a nossa jornada e o compromisso com o seu bem-estar.</p>
                        <button>Saiba Mais</button>
                    </div>

                    {/* Imagem à direita */}
                    <div className="about-us-image-container">
                        <img src={placeholder} alt="Serviço de Spa" />
                    </div>
                </div>
            </main>
            <footer>
                <p>&copy; 2024 SPA Beleza. Todos os direitos reservados.</p> {/* Texto de rodapé com os direitos reservados */}
            </footer>
        </div>
    );
};

export default Home; // Exporta o componente Home para ser usado em outros lugares
