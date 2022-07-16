import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/products/productGrid";
import Slider from "./components/Slider/Slider";
import AddProduct from "./components/admin/AddProduct"
import AddCategory from "./components/admin/AddCategory";
function App() { 
  return (
    <div className="relative">
      
      {/* <AddProduct /> */}
      {/* <AddCategory/> */}
      <Slider />
      <ProductGrid />
    </div>
  );
}

export default App;
