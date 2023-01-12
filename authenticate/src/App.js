import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homescreen from './Screen/homescreen';
import Register from './Screen/registerScreen';
import Addnew from './Screen/addnew';
import Login from './Screen/loginScreen';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homescreen" element={<Homescreen />} />
          <Route path="/addnewpokemon" element={<Addnew />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
