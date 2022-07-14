import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import Navbar from './components/Navbar';
import Home from './pages/Home'
import ItemDetail from "./pages/ItemDetail";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
