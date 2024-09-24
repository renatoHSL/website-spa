import React from 'react';
import './Services.css'; // Importa o CSS para estilização
import { Link } from 'react-router-dom'; // Importa Link para navegação interna

import bemEstarImg from '../assets/products/placeholder1.png';


const servicesData = [
    {
        title: 'Bem-Estar e Relaxamento',
        description: 'Desfrute de uma variedade de serviços de massagem e relaxamento projetados para aliviar o estresse e promover o bem-estar geral.',
        image: bemEstarImg, // Substitua pelo caminho real da imagem
        link: '/'
    },
    {
        title: 'Estética',
        description: 'Tratamentos estéticos para rejuvenescimento, beleza e cuidados com a pele, oferecendo resultados visíveis e duradouros.',
        image: bemEstarImg, // Substitua pelo caminho real da imagem
        link: '/services/produto2'
    },
    {
        title: 'Gestante e Pós-Parto',
        description: 'Cuidados especiais para gestantes e novas mães, com foco em saúde, bem-estar e recuperação pós-parto.',
        image: bemEstarImg, // Substitua pelo caminho real da imagem
        link: '/services/produto3'
    },
    {
        title: 'Demais Tratamentos',
        description: 'Uma ampla gama de tratamentos terapêuticos para atender às suas necessidades individuais de saúde e bem-estar.',
        image: bemEstarImg, // Substitua pelo caminho real da imagem
        link: '/services/produto4'
    },
    {
        title: 'Combos',
        description: 'Pacotes de serviços combinados para oferecer uma experiência completa e personalizada com excelentes benefícios.',
        image: bemEstarImg, // Substitua pelo caminho real da imagem
        link: '/services/produto5'
    }
];

const Services = () => {
    return (
        <div className="services-page">
            <main>
                <h1>Nossos Serviços</h1>
                <div className="services-list">
                    {servicesData.map((service, index) => (
                        <div className="service-item" key={index}>
                            <Link to={service.link} className="service-link">
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className="service-info">
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
                                </div>
                            </Link>

                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Services;
