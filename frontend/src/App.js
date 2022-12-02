
import {Route,Routes} from "react-router-dom"
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Products } from "./pages/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/products/:id"  element={<Products/>}/>
      <Route path="/product/:id"  element={<Product/>}/>
    </Routes>
  );
}

export default App;
