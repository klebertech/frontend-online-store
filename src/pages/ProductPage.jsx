import React, { Component } from 'react';
import Header from '../components/Header';
import SingleProduct from '../components/SingleProduct';

export default class ProductPage extends Component {
  state = {
    isLoading: false,
    product: {},
    title: '',
    image: '',
    price: '',
    warranty: '',
    code: '',
    sellerId: '',
  };

  async componentDidMount() {
    const { match: { params } } = this.props;
    const URL = `https://api.mercadolibre.com/items/${params.id}`;
    const product = await fetch(URL);
    const result = await product.json();
    this.setState({
      product: result,
      title: result.title,
      image: result.pictures[0].url,
      price: result.price,
      warranty: result.warranty,
      code: result.id,
      sellerId: result.seller_id,
      quantity: result.available_quantity,
      sold: result.sold_quantity,
    });
    console.log(result);
  };

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
    } = this.state;
    return (
      <div className="bg-neutral-200 font-sans h-full">
        <Header />
        {<SingleProduct
          title={ title }
          image={ image }
          price={ price }
          warranty={ warranty }
          code={ code }
          sellerId={ sellerId }
          quantity={ quantity }
          sold={ sold }
        />}
        {image.url}
      </div>
    );
  }
}
