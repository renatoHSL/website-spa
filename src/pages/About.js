import React from 'react'; // Importa React para o uso de JSX e criação de componentes
import './About.css'; // Importa o CSS para estilização

const About = () => {
    return (
        <div className="about-us">
            <main>
                <h1>Sobre Nós</h1>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Há quase 25 anos atrás, uma jovem mulher com duas filhas resolveu mudar de profissão. De lá para cá, muita coisa aconteceu.
                            Principalmente - para o que esse texto se propõe - muitas vidas foram transformadas pelo poder do toque, do acolhimento e da paz transmitidas a partir de um trabalho que, como vemos hoje, transcende o profissional.
                            Acreditamos em coisas (no geral) construídas com alma e firmadas em bases sólidas.
                            Assim nasce a EGN, que nada mais é que a abreviação de Eugenio, nosso sobrenome.
                            Juntamos aqui vidas que já estavam juntas há algum tempo. E, após muitos anos de aprendizado e muito trabalho, nos unimos para ressignificar uma história.
                            Esperamos transmitir nossos valores, compartilhar os nossos e os seus sonhos e desempenhar um trabalho sério, justo e eficaz.
                            Mas, no fundo, desejamos mesmo criar um ambiente de paz e comunhão, para que o que é feito através das nossas mãos possa ser sentido em você de maneira plena.
                            <br /><br />
                            Com carinho,
                            <br />
                            Selmar, Isabela e Leonardo.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="" alt="Foto dos Donos do SPA" />
                        {/* Substitua 'path/to/owners-photo.jpg' pelo caminho real da imagem */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;
