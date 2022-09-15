import React, { Component } from 'react';

export default class SingleProduct extends Component {
  render() {
    const { title, image, price, warranty, code, sellerId } = this.props;
    const realPrice = parseFloat(price).toFixed(2);
    return (
      <div className="flex flex-row flex-wrap justify-center pt-12">
        <div className="border-2 border-stone-50 rounded-lg shadow-sm hover:shadow-lg">
          <img src={ image } alt={ title } />
        </div>
        <div className="flex flex-wrap flex-col pl-12 justify-center bg-stone-50 rounded-lg px-12 ml-12">
          <p>- { title }</p>
          <p>- Codigo: { code }</p>
          <p>- Vendedor: { sellerId }</p>
          { warranty && <p>- { warranty }</p> }
          <h3 className="text-4xl pt-12 pl-4 text-center">R$ { realPrice }</h3>
          <div className="flex flex-wrap flex-row justify-center">
            <button type="button" className="bg-blue-500 w-8 h-8 mt-12 ml-4">+</button>
            <h2 className="mt-12 ml-4 text-xl">1</h2>
            <button type="button" className="bg-blue-500 w-8 h-8 mt-12 ml-4">-</button>
            <button type="button" className="bg-blue-500 w-72 h-10 mt-10 ml-12 self-center rounded-lg shadow-md">Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    );
  }
}
