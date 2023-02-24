
import AllRoutes from './allroutes/Routes';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      {/* <Footer/> */}
      {/* <Products/> */}
    </div>
  );
}

export default App;
