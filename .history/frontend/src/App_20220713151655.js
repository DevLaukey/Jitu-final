import ProductGrid from "./components/Products/productGrid";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative">
      <Navbar />
       <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
