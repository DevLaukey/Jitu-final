import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/products/productGrid";
import Slider from "./components/Slider/Slider";
function App() {
  return (
    <div className="relative">
      <Navbar />
      <Slider />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
