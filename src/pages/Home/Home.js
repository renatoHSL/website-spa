import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import spaImage from '../../assets/home/main_video/mainphoto.png';
import placeholder from '../../assets/home/placeholder/placeholder.png';
import product1 from '../../assets/products/placeholder1.png';
import product4 from '../../assets/products/placeholder4.png';


const Home = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/about');
    };
    const [currentImages, setCurrentImages] = useState(0);
    const [animate, setAnimate] = useState(false);

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

    const handleChangeImages = () => {
        setAnimate(true);
        setTimeout(() => {
            setCurrentImages((prevImages) => (prevImages === 0 ? 1 : 0));
            setAnimate(false);
        }, 300);
    };

    return (
        <div>
            <main>
                <div className="video-container">
                    <img src={spaImage} alt="Serviço de Spa" />
                </div>

                <div className="about-us-container">
                    <div className="about-us-text-container">
                        <h2>Conheça nossa História</h2>
                        <p>Oferecemos os melhores serviços de spa para relaxamento e bem-estar. Descubra a nossa jornada e o compromisso com o seu bem-estar.</p>
                        <button className="change-images-button" onClick={handleButtonClick}>Saiba Mais</button>
                    </div>

                    <div className="about-us-image-container">
                        <img src={placeholder} alt="Serviço de Spa" />
                    </div>
                </div>

                <div className="highlight-container">
                    <h2>Produtos em Destaque</h2>
                    <div className={`products-grid ${animate ? 'animate' : ''}`}>
                        {products[currentImages].map((product, index) => (
                            <div key={index} className="product-item">
                                <img src={product.image} alt={`Produto ${index + 1}`} />
                                <p>{product.description}</p>
                            </div>
                        ))}
                    </div>
                    <button id="contact-section" className="change-images-button" onClick={handleChangeImages}>
                        Ver Mais Produtos
                    </button>
                </div>
                <div className="map-container">
                    <h2>Venha nos visitar!</h2>
                    <div class="map-description-container">
                        <div class="map-description-block">
                          <p>Endereço: Rua Padre Elias Gorayeb, 15. Sala 203. Tijuca. Rio de Janeiro. <br /> CEP 20520-140, RJ</p>
                        </div>
                        <div class="map-description-block">
                          <p>Telefone: (21) 99691-4156 <br /> Email: contato@egnspa.com <br /> Instagram: @egnestetica</p>
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
                        title="Localização do SPA"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14698.664615643429!2d-43.2342505!3d-22.9256814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f4d7561d4d5%3A0xa61dbd89d1ecad47!2sEGN%20-%20Est%C3%A9tica%20e%20Spa!5e0!3m2!1spt-BR!2sbr!4v1727910503098!5m2!1spt-BR!2sbrade"
                        width="100%"
                        height="350"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </main>
        </div>
    );
};

export default Home;
