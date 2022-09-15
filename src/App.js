import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route  path="/cart" component={ Cart } />
        <Route  path="/checkout" component={ Checkout } />
        <Route  path="/product/:id" component={ ProductPage } />
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
