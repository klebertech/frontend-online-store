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
        <div className="flex flex-wrap justify-between sm:w-full sm:justify-center sm:mt-10 sm:mb-6">
          <p className="text-start text-sm ml-2 text-slate-400 sm:order-2 sm:ml-12">
            <span>Novo | { sold }</span>
          </p>
          <span className="self-end mr-2 text-blue-400 sm:order-3 sm:ml-2 sm:self-start">&#9733; &#9733; &#9733; &#9733;</span>
          <p className="text-start ml-2 mb-4 sm:order-1">{ title }</p>
        </div>
        <div className="border-2 border-stone-50 rounded-lg shadow-sm hover:shadow-lg w-2/3 mb-8 sm:w-2/6 sm:">
          <img src={ image } alt={ title } />
        </div>
        <div className="flex flex-wrap flex-col w-full m-4 px-4 py-4 justify-center bg-white border-2 border-stone-50 shadow-sm hover:shadow-lg rounded-lg sm:w-1/3 sm:h-full sm:mt-0 ">
          <div className="text-start">
            <p>Codigo: { code }</p>
            <p>Vendedor: { sellerId }</p>
            <p>Estoque: { quantity }</p>
          { warranty && <p>{ warranty }</p> }
          </div>
          <h3 className="text-4xl pt-6 text-start font-light font-mono">R${ realPrice }</h3>
          <div className="flex flex-wrap flex-row justify-center sm:justify-start">
            <button type="button" className="bg-blue-500 w-8 h-8 mt-10 rounded-lg">+</button>
            <h2 className="mt-10 ml-4 text-xl">1</h2>
            <button type="button" className="bg-blue-500 w-8 h-8 mt-10 ml-4 rounded-lg sm:mr-12">-</button>
            <button type="button" className="bg-blue-500 w-full h-10 mt-6 self-center rounded-lg shadow-md sm:mt-8">Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    );
  }
}
