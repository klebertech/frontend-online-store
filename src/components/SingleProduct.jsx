import React, { Component } from 'react';

export default class SingleProduct extends Component {
  render() {
    const {
      title,
      image,
      price,
      warranty,
      code,
      sellerId,
      quantity,
      sold,
    } = this.props;
    const realPrice = parseFloat(price).toFixed(2);
    return (
      <div className="flex flex-row flex-wrap justify-center pt-4">
        <div className="flex flex-wrap justify-between">
          <p className="text-start text-sm ml-2 text-slate-400">
            <span>Novo | { sold }</span>
          </p>
          <span className="self-end mr-2 text-blue-400">&#9733; &#9733; &#9733;</span>
          <p className="text-start ml-2 mb-4">{ title }</p>
        </div>
        <div className="border-2 border-stone-50 rounded-lg shadow-sm hover:shadow-lg w-2/3 mb-8">
          <img src={ image } alt={ title } />
        </div>
        <div className="flex flex-wrap flex-col justify-center bg-stone-50 rounded-lg w-full m-4 px-4 py-4">
          <div className="text-center">
            <p>Codigo: { code }</p>
            <p>Vendedor: { sellerId }</p>
          </div>
          { warranty && <p>- { warranty }</p> }
          <h3 className="text-4xl pt-6 text-center">R$ { realPrice }</h3>
          <div className="flex flex-wrap flex-row justify-center">
            <button type="button" className="bg-blue-500 w-8 h-8 mt-10">+</button>
            <h2 className="mt-10 ml-4 text-xl">1</h2>
            <button type="button" className="bg-blue-500 w-8 h-8 mt-10 ml-4">-</button>
            <button type="button" className="bg-blue-500 w-72 h-10 mt-6 self-center rounded-lg shadow-md">Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    );
  }
}
