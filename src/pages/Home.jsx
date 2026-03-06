import React from 'react';
import Menu from '../components/menu/menu';
import Footer from '../components/footer/footer';

const Home = () => {
    return (
        <>
            <Menu />
            <main>
                <h1>Bem vindo a TechSolutions!</h1>
                <p>Na TechSolutions, estamos comprometidos em fornecer soluções tecnológicas inovadoras e personalizadas para atender às necessidades únicas de cada cliente. Nossa equipe de especialistas trabalha em estreita colaboração com nossos clientes para entender seus desafios e objetivos, garantindo que nossas soluções sejam eficazes e eficientes.</p>
                <section>
                    <h2>Página de Produtos</h2>
                    <p>Explore nossa variedade de produtos que atendem às suas necessidades tecnológicas. Oferecemos desde software personalizado até hardware de última geração.</p>

                    <h2>Sobre a Empresa</h2>
                    <p>A TechSolutions é uma empresa dedicada a oferecer soluções tecnológicas de alta qualidade. Nossa missão é inovar e transformar o mercado com serviços que realmente fazem a diferença.</p>

                    <h2>Página de Contato</h2>
                    <p>Entre em contato conosco para saber mais sobre nossos serviços ou para discutir como podemos ajudar sua empresa a crescer. Estamos aqui para ajudar!</p>
                </section>
            </main>
            <Footer/>
        </>

    );
};

export default Home;