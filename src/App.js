
import './App.css';
import Burgur from './pages/Burgur';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Neuron from './pages/Neuron';
import Product from './pages/Product';
import Story from './pages/Story';
import Wellness from './pages/Wellness';

function App() {
  return (
    <div>
      <Home/>
      <Story/>
      <Product/>
      <Wellness/>
      <Burgur/>
      <Neuron/>
      <Footer/>
    </div>
  );
}

export default App;
