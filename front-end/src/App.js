import "./App.css";
import Login from "./components/login/login";
import Perfil from "./components/perfil/perfil";
import Registro from "./components/registro/registro";
import Consulta from "./components/consulta/consulta";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Libros from "./components/libros/libros";
import RegistroLibro from "./components/registroLibro/registroLibro";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar />
      <Routes> 
      <Route exact path="/" element={<Login />} />
          <Route exact path="/perfil" element={<Perfil />} />
          <Route exact path="/registro" element={<Registro />} />
          <Route exact path="/consulta" element={<Consulta />} /> 
          <Route exact path="/libros" element={<Libros />} />
          <Route exact path="/registroLibro" element={<RegistroLibro />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
