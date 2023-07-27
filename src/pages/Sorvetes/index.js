import React from "react";
import './sorvete.css';
import ProductCardSorv from '../../Componentes/ProductCardSorv'

function Sorvete(){
    return(
        <div className="container-sorvete">
            
            
            <div className="container-card">
            <h1>Conheça os deliciosos sabores dos nossos Sorvetes</h1>
                <ProductCardSorv
                    imagem={require('../../Imagens/Sorvetes/SaborSensaçãodeVerão.jpg')}
                    nome="Sensação de Verão"
                    descricao="Um sorvete refrescante que combina suculentos pedaços de manga, maracujá e abacaxi. Perfeito para dias ensolarados!"
                    preco="22,50"
                  />
                  
                  <ProductCardSorv
                    imagem={require('../../Imagens/Sorvetes/SaborChocolândia.jpg')}
                    nome="Chocolândia"
                    descricao="Para os amantes de chocolate! Delicie-se com a cremosidade do sorvete de chocolate belga e pedaços crocantes de brownie."
                    preco="19,90"
                  />
                  
                  <ProductCardSorv
                    imagem={require('../../Imagens/Sorvetes/SaborNoiteEstrelada.jpg')}
                    nome="Noite Estrelada"
                    descricao="Um sorvete exótico que combina a doçura do coco com o sabor marcante do maracujá. Uma viagem gastronômica única!"
                    preco="25,90"
                  />
                  
                  <ProductCardSorv
                    imagem={require('../../Imagens/Sorvetes/SaborLimãoSicilianoDelight.jpg')}
                    nome="Limão Siciliano Delight"
                    descricao="Refresque-se com o sabor cítrico do limão siciliano e um toque de hortelã. Uma explosão de sabores na boca!"
                    preco="17,50"
                  />
                  
                  <ProductCardSorv
                    imagem={require('../../Imagens/Sorvetes/SaborDoceAmor.jpg')}
                    nome="Doce Amor"
                    descricao="O sabor do romance em um sorvete! Desfrute da combinação suave de morango e leite condensado."
                    preco="18,90"
                  />
                  
                  <ProductCardSorv
                    imagem={require('../../Imagens/Sorvetes/SaborCookies&Cream.jpg')}
                    nome="Cookies & Cream"
                    descricao="Para os amantes de cookies! Um sorvete cremoso com pedaços crocantes de cookies de chocolate."
                    preco="19,90"
                  />
                  
                  <ProductCardSorv
                    imagem={require('../../Imagens/Sorvetes/SaborCaramelito.jpg')}
                    nome="Caramelito"
                    descricao="Delicie-se com o sabor suave do caramelo combinado com flocos crocantes de amêndoas."
                    preco="21,90"
                  />
                  
                  <ProductCardSorv
                    imagem={require('../../Imagens/Sorvetes/SaborCheesecakedeMorango.jpg')}
                    nome="Cheesecake de Morango"
                    descricao="Uma combinação divina de cheesecake de morango e pedaços suculentos de frutas vermelhas."
                    preco="24,90"
                  />
                  
                  <ProductCardSorv
                    imagem={require('../../Imagens/Sorvetes/SaborAbacaxiTropica.jpg')}
                    nome="Abacaxi Tropical"
                    descricao="Leve o sabor do verão para casa com o sorvete de abacaxi fresco e notas de coco."
                    preco="19,90"
                  />
                  
                  <ProductCardSorv
                    imagem={require('../../Imagens/Sorvetes/SaborPistachioDream.jpg')}
                    nome="Pistachio Dream"
                    descricao="Para os amantes de pistache! Delicie-se com o sabor marcante do pistache e sua cor verde encantadora."
                    preco="22,90"
                  />
                  
                  <ProductCardSorv
                    imagem={require('../../Imagens/Sorvetes/SaborMentaChocolatudo.jpg')}
                    nome="Menta Chocolatudo"
                    descricao="Uma combinação clássica de menta fresca e chocolate meio amargo. Perfeito para os apaixonados por contrastes!"
                    preco="17,90"
                  />
                  
                  <ProductCardSorv
                    imagem={require('../../Imagens/Sorvetes/SaborMelãoRefrescante.jpg')}
                    nome="Melão Refrescante"
                    descricao="Refresque-se com o sabor doce e suculento do melão combinado com uma pitada de limão."
                    preco="23,90"
                  />
                  
            </div>
        </div>
    )
}

export default Sorvete;