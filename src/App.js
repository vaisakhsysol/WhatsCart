import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Index from "./Pages";
import Product from "./Pages/Product";
import Offers from "./Pages/Offers";
import Footer from "./Components/Footer/Footer";
import Cart from "./Pages/Cart";
import Address from "./Pages/Address";
import Payment from "./Pages/Payment";
import Success from "./Pages/Success";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";





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
          <Route path="/payment" element = {<Payment/>}/>
          <Route path="/success" element = {<Success/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/signup" element = {<SignUp/>}/>
          
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
