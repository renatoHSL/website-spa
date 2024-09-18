import React, { useState } from 'react';
import './Home.css'; // Importa o arquivo de estilo CSS
import spaImage from '../assets/home/main_video/mainphoto.png'; // Importa a imagem principal para ser usada no componente
import placeholder from '../assets/home/placeholder/placeholder.png'; // Outra imagem para a seção "Conheça nossa História"
import product1 from '../assets/products/placeholder1.png'; // Imagem do primeiro produto
import product2 from '../assets/products/placeholder2.png'; // Imagem do segundo produto
import product3 from '../assets/products/placeholder3.png'; // Imagem do terceiro produto
import product4 from '../assets/products/placeholder4.png'; // Imagem do quarto produto
import product5 from '../assets/products/placeholder5.png'; // Imagem do quinto produto
import product6 from '../assets/products/placeholder6.png'; // Imagem do sexto produto

const Home = () => {
    // Definindo o estado inicial para controlar o conjunto de imagens exibido
    const [currentImages, setCurrentImages] = useState(0);
    const [animate, setAnimate] = useState(false); // Estado para controlar a animação

    // Conjuntos de imagens e descrições dos produtos
    const products = [
        [
            { image: product1, description: "Produto 1 - Descrição detalhada" },
            { image: product2, description: "Produto 2 - Descrição detalhada" },
            { image: product3, description: "Produto 3 - Descrição detalhada" }
        ],
        [
            { image: product4, description: "Produto 4 - Descrição detalhada" },
            { image: product5, description: "Produto 5 - Descrição detalhada" },
            { image: product6, description: "Produto 6 - Descrição detalhada" }
        ]
    ];

    // Função para alternar entre os conjuntos de imagens
    const handleChangeImages = () => {
        setAnimate(true); // Inicia a animação
        setTimeout(() => {
            setCurrentImages((prevImages) => (prevImages === 0 ? 1 : 0)); // Alterna entre o conjunto de imagens 0 e 1
            setAnimate(false); // Para a animação
        }, 300); // Tempo da animação (300ms)
    };

    return (
        <div>
            <main>
                {/* Seção da imagem principal no centro da tela */}
                <div className="video-container">
                    <img src={spaImage} alt="Serviço de Spa" /> {/* Exibe a imagem principal */}
                </div>

                {/* Seção 'Conheça nossa História' com texto e imagem lado a lado */}
                <div className="about-us-container">
                    {/* Texto e botão à esquerda */}
                    <div className="about-us-text-container">
                        <h2>Conheça nossa História</h2> {/* Título da seção */}
                        <p>Oferecemos os melhores serviços de spa para relaxamento e bem-estar. Descubra a nossa jornada e o compromisso com o seu bem-estar.</p> {/* Texto descritivo */}
                        <button>Saiba Mais</button> {/* Botão de ação */}
                    </div>

                    {/* Imagem à direita */}
                    <div className="about-us-image-container">
                        <img src={placeholder} alt="Serviço de Spa" /> {/* Exibe a imagem "Conheça nossa História" */}
                    </div>
                </div>

                {/* Seção de Produtos em Destaque com animação */}
                <div className="highlight-container">
                    <h2>Produtos em Destaque</h2> {/* Título da seção de produtos */}
                    <div className={`products-grid ${animate ? 'animate' : ''}`}>
                        {/* Mapeia os produtos do conjunto atual (com base no estado) e exibe 3 imagens e descrições */}
                        {products[currentImages].map((product, index) => (
                            <div key={index} className="product-item">
                                <img src={product.image} alt={`Produto ${index + 1}`} /> {/* Exibe a imagem do produto */}
                                <p>{product.description}</p> {/* Exibe a descrição do produto */}
                            </div>
                        ))}
                    </div>
                    <button className="change-images-button" onClick={handleChangeImages}>
                        Ver Mais Produtos {/* Botão para trocar as imagens */}
                    </button>
                </div>
                {/* Seção do Google Maps */}
                <div className="map-container">
                    <iframe
                        title="Localização do SPA" /* Adiciona um título ao iframe para acessibilidade */
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%"
                        height="450"
                        style={{ border: "0" }} /* Certifique-se de usar um objeto para a prop 'style' */
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </main>
            <footer>
                <p>&copy; 2024 SPA Beleza. Todos os direitos reservados.</p> {/* Texto de rodapé */}
            </footer>
        </div>
    );
};

export default Home; // Exporta o componente Home para ser usado em outros lugares
