import ProductGrid from "./components/Products/productGrid";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import ProductGrid from "./components/products/productGrid";

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
