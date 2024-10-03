import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import './Home.css'; // Importa o arquivo de estilo CSS
import spaImage from '../../assets/home/main_video/mainphoto.png'; // Importa a imagem principal para ser usada no componente
import placeholder from '../../assets/home/placeholder/placeholder.png'; // Outra imagem para a seção "Conheça nossa História"
import product1 from '../../assets/products/placeholder1.png'; // Imagem do primeiro produto
import product4 from '../../assets/products/placeholder4.png'; // Imagem do quarto produto


const Home = () => {
    const navigate = useNavigate(); // Hook para navegação

    const handleButtonClick = () => {
        navigate('/about'); // Navega para a página "About"
    };
    // Definindo o estado inicial para controlar o conjunto de imagens exibido
    const [currentImages, setCurrentImages] = useState(0);
    const [animate, setAnimate] = useState(false); // Estado para controlar a animação

    // Conjuntos de imagens e descrições dos produtos
    const products = [
        [
            { image: product1, description: "Produto 1 - Descrição detalhada" },
            { image: product1, description: "Produto 2 - Descrição detalhada" },
            { image: product1, description: "Produto 3 - Descrição detalhada" }
        ],
        [
            { image: product4, description: "Produto 4 - Descrição detalhada" },
            { image: product4, description: "Produto 5 - Descrição detalhada" },
            { image: product4, description: "Produto 6 - Descrição detalhada" }
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
                        <button className="change-images-button" onClick={handleButtonClick}>Saiba Mais</button> {/* Botão de ação */}
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
                    <button id="contato" className="change-images-button" onClick={handleChangeImages}>  {/*id contatos aqui para que o rolamento da pagina fique na posicao correta*/}
                        Ver Mais Produtos {/* Botão para trocar as imagens */}
                    </button>
                </div>
                {/* Seção do Google Maps */}
                <div className="map-container">
                    <h2>Venha nos visitar!</h2> {/* Título da seção de produtos */}
                    <div class="map-description-container">
                        <div class="map-description-block">
                          <p>Endereço: Rua Padre Elias Gorayeb, 15. Sala 203. Tijuca. Rio de Janeiro. <br /> CEP 20520-140, RJ</p>
                        </div>
                        <div class="map-description-block">
                          <p>Telefone: (21) XXXX-XXXX <br /> Email: xxxxx@xxx.com.br <br /> Instagram: @egnestetica</p>
                        </div>
                        <div class="map-description-block">
                          <p>Horário de funcionamento:<br />
                            Segunda a sexta: 09:00 – 19:00<br />
                            Sábado: 08:00 – 14:00<br />
                            Domingo: Fechado
                            </p>
                        </div>
                      </div>
                    <iframe
                        title="Localização do SPA" /* Adiciona um título ao iframe para acessibilidade */
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14698.664615643429!2d-43.2342505!3d-22.9256814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f4d7561d4d5%3A0xa61dbd89d1ecad47!2sEGN%20-%20Est%C3%A9tica%20e%20Spa!5e0!3m2!1spt-BR!2sbr!4v1727910503098!5m2!1spt-BR!2sbrade"
                        width="100%"
                        height="350"
                        style={{ border: "0" }} /* Certifique-se de usar um objeto para a prop 'style' */
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </main>
        </div>
    );
};

export default Home; // Exporta o componente Home para ser usado em outros lugares
