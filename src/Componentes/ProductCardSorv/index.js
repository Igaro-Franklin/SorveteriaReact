import React from "react";
import './cardSorvete.css';

function ProductCardSorv( { nome, descricao, preco, imagem } ){
    return(
        <div className="cardSorvete">
            <img src={ imagem } alt={ nome } />
            <div className="CardInfo">
                <h2>{ nome }</h2>
                <p> { descricao } </p>
                <p className="p-sorv">R$ {preco}</p>
            </div>

        </div>
    )
}

export default ProductCardSorv;