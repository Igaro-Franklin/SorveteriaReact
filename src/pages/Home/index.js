import React from "react";
import './home.css';
import { Link } from "react-router-dom";



function Home(){

    return(
        <div className="container-home">
            <h1>Bem-vindo(a) à <span className="texto-animado">Sorveteria Delícias Geladas!</span></h1>
            <h3>Sabores irresistíveis e momentos refrescantes estão aqui!</h3>
            <div className="home-text">
                <p>Descubra a magia dos sorvetes artesanais feitos com paixão.</p>
                <div className="home-btn">
                    <Link to="/sorvetes"><button className="button">Sorvetes</button></Link>
                    <Link to="/picoles"><button className="button">Picoles</button></Link>
                </div>
            </div>
            <p>Experimente nossos sabores únicos e se delicie!</p>
        </div>
    )
}

export default Home;