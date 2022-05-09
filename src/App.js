import './App.css';
import Navbar from './Components/Car-Design/Navbar';
import Card from './Components/Car-Specs/Card';
import StickyFooter from './Components/Car-Design/Footer';
import CarsHomePage from './Components/Car-Design/CarsHomePage';
import { Route, Routes, BrowserRouter} from "react-router-dom"
const App = () => {
  return (
    <>

    <Navbar />
<BrowserRouter>
<Routes>
  <Route path="/" element={<CarsHomePage />} />
  <Route path="/car-spec/:id" element={<Card />} />
</Routes>

</BrowserRouter>
<StickyFooter />
</>
  );
}

export default App;
