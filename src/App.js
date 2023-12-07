import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Index from "./Pages";
import Product from "./Pages/Product";
import Offers from "./Pages/Offers";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element = {<Index/>}/>
          <Route path="product" element = {<Product/>}/>
          <Route path="offers" element = {<Offers/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
