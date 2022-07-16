import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import Navbar from './components/Navbar';
import Home from './pages/Home'
import ProductDetail from "./pages/ProductDetail";
import { ShoppingCartProvider } from "./context/ShoppingCartContex"

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar/>
        <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Container>
      </BrowserRouter>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
