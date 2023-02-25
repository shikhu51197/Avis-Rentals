
import AllRoutes from './allroutes/Routes';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Nav';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      
    </div>
  );
}

export default App;
