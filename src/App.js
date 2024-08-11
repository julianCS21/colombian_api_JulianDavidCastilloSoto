import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ColombiaDash from './components/pages/ColombiaDash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="colombia_dash" element={<ColombiaDash />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
