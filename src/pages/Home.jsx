import React, { Component } from 'react'
import Header from '../components/Header';
import Loading from '../components/Loading';
import Menu from '../components/Menu';
import ProductCard from '../components/ProductCard';
import * as api from '../services/api'

export default class Home extends Component {
  state = {
    isLoading: false,
    dataCategories: [],
    dataProducts: [],
  }

  async componentDidMount() {
    const getCategoriesApi = await api.getCategories();
    const getItens = await api.getItensByCategories("MLB1071");
    const result = await getItens.json();
    this.setState({dataCategories: getCategoriesApi, dataProducts: result.results })
    
  }

  handleClickMenu = async ({ target }) => {
    this.setState({ isLoading: true });
    // const { dataProducts, isLoading } = this.state;
    const { id } = target;
    const getItens = await api.getItensByCategories(id);
    const result = await getItens.json();
    this.setState({
      dataProducts: result.results,
    }, () => {
      this.setState({ isLoading: false })
    });
  }

  handleClick = async ({ target }) => {
    // const { id } = target;
  };

  render() {
    const { isLoading, dataCategories, dataProducts } = this.state;
    return (
      <div className="bg-neutral-200 font-sans">
        <Header />
        <div className="flex flex-wrap">
          <div className="w-1/5 ml-52 mt-10">
            <p className="pl-16 text-lg font-extrabold underline decoration-double">Categorias</p>
            {dataCategories.map((category) => (
              <Menu 
                key={ category.id }
                id={ category.id }
                name={ category.name }
                handleClickMenu={ this.handleClickMenu }
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-evenly w-4/6 ml-2 mt-10">
            { isLoading && <Loading /> }
            { dataProducts.length > 0 && dataProducts.map((product) => (
              <div className="w-64 p-4" key={ product.id }>
                <ProductCard
                  key={ product.id }
                  image={ product.thumbnail }
                  title={ product.title }
                  price={ product.price }
                  id={ product.id }
                  handleClick={ this.handleClick }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}