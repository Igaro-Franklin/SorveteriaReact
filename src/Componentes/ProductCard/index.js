import React from "react";
import './productCard.css'

function ProductCard( { nome, descricao, preco, imagem } ){
    return (
        <div className="product-card">
          <h2>{nome}</h2>
          <img src={imagem} alt={`Picolé de ${nome}`}/>
          <p>{descricao}</p>
          <p className="p-preco">R$ {preco}</p>
        </div>
      );
}

export default ProductCard;