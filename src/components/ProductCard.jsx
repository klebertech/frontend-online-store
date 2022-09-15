import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { image, title, price, id, handleClick } = this.props;
    return (
      <div 
        key={ id }
        className="bg-white flex flex-wrap text-center rounded-lg h-80 px-4 shadow-sm hover:shadow-2xl"
      >
          <Link to={`/product/${id}`}>
            <div className="flex flex-wrap flex-col justify-center">
              <img src={ image } alt={ title } className="pt-4 object-contain" />
              <p className="line-clamp-3 pt-6">{ title }</p>
            </div>
          </Link>
        <div className="self-end pb-4">
          <p>R$ { price.toFixed(2) }</p>
          <button
            id={ id }
            type="button"
            className="bg-blue-500 w-44 h-10 mx-2 rounded-lg shadow-md"
            onClick={ handleClick }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    )
  }
}
