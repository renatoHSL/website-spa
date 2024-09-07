import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Bem-vindo ao SPA Beleza</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Serviços</a></li>
                        <li><a href="/about">Sobre Mim</a></li>
                    </ul>
                </nav>
            </header>
            <div className="horizontal-line"></div>
            <main>
                <section>
                    <h2>Relaxe e Revitalize</h2>
                    <p>Oferecemos os melhores serviços de spa para relaxamento e bem-estar.</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 SPA Beleza. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default Home;
