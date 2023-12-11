import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Index from "./Pages";
import Product from "./Pages/Product";
import Offers from "./Pages/Offers";
import Footer from "./Components/Footer/Footer";
import Cart from "./Pages/Cart";
import Address from "./Pages/Address";




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element = {<Index/>}/>
          <Route path="/product/:id" element = {<Product/>}/>
          <Route path="/offers" element = {<Offers/>}/>
          <Route path="/cart" element = {<Cart/>}/>
          <Route path="/address" element = {<Address/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
