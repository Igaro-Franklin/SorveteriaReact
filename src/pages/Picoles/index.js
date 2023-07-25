import React from "react";
import './picole.css'
import ProductCard  from "../../Componentes/ProductCard";

function Picoles(){
    return(
        <div className="container-picole">
            <h1>Conheça os deliciosos sabores dos nossos picolés</h1>
            <div className="sabores-picoles">
            <ProductCard
                nome="Frutas Frescas"
                imagem={require('../../Imagens/Picoles/FrutasFrescas.jpg')}
                descricao="Uma combinação irresistível de frutas frescas e creme. Experimente!"
                preco="10,50"
            />
            <ProductCard
                nome="Chocolate Belga"
                imagem={require('../../Imagens/Picoles/ChocolateBelga.jpg')}
                descricao="Um clássico reinventado com um toque especial de chocolate belga."
                preco="8,90"
            />
            <ProductCard
                nome="Café Crocante"
                imagem={require('../../Imagens/Picoles/CafeCrocante.jpg')}
                descricao="Delicie-se com o intenso do café e pedaços crocantes de amêndoas."
                preco="12,90"
            />
            <ProductCard
                nome="Limão Siciliano"
                imagem={require('../../Imagens/Picoles/LimaoSiciliano.jpg')}
                descricao="Um sorvete suave e refrescante com um toque cítrico de limão siciliano."
                preco="6,50"
            />
            <ProductCard
                nome="Baunilha Brownie"
                imagem={require('../../Imagens/Picoles/BaunilhaBrownie.jpg')}
                descricao="Mistura perfeita de baunilha cremosa e deliciosos pedaços de brownie."
                preco="9,90"
            />
            <ProductCard
                nome="Caramelo Flor de Sal"
                imagem={require('../../Imagens/Picoles/CarameloFlorDeSal.jpg')}
                descricao="Desfrute da doçura do caramelo combinada com um toque de flor de sal."
                preco="7,50"
            />
            <ProductCard
                nome="Morango Crocante"
                imagem={require('../../Imagens/Picoles/MorangoCrocante.jpg')}
                descricao="Alegre seu dia com um sorvete de morango fresco e pedaços crocantes de biscoito."
                preco="11,50"
            />
            <ProductCard
                nome="Tiramisu"
                imagem={require('../../Imagens/Picoles/Tiramisu.jpg')}
                descricao="Um clássico italiano com a cremosidade do mascarpone e a intensidade do café."
                preco="13,50"
            />
            <ProductCard
                nome="Maracujá com Leite Condensado"
                imagem={require('../../Imagens/Picoles/MaracujaComLeiteCondensado.jpg')}
                descricao="Saboreie o contraste irresistível entre o doce do leite condensado e a acidez da maracujá."
                preco="8,90"
            />
            <ProductCard
                nome="Manga com Coco"
                imagem={require('../../Imagens/Picoles/MangaComCoco.jpg')}
                descricao="Uma explosão de sabores com a combinação exótica de manga e coco fresco."
                preco="10,50"
            />
            <ProductCard
                nome="Limão e Hortelã"
                imagem={require('../../Imagens/Picoles/LimaoHortela.jpg')}
                descricao="Refresque-se com um sorvete de limão-siciliano e hortelã, perfeito para os dias quentes."
                preco="6,90"
            />
            <ProductCard
                nome="Chocolate Branco com Amêndoas"
                imagem={require('../../Imagens/Picoles/ChocBrancoAmendoas.jpg')}
                descricao="Delicie-se com o sabor suave do chocolate branco e pedaços crocantes de amêndoas."
                preco="14,90"
            />

            </div>
        </div>
    )
}

export default Picoles;