
import AllRoutes from './allroutes/Routes';
import './App.css';
import Navbar from './components/Navbar';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      {/* <Products/> */}
    </div>
  );
}

export default App;
