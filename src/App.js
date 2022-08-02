import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/pages/Home';
import Slider from './components/pages/Slider';
import Category from './components/pages/Category';
import Navbar from './components/layout/Navbar';
import Rewards from './components/pages/Rewards';
import Error from './components/pages/Error';
function App(props) {
  return (
      <div className="App">

        <Router>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/reward' element={<Rewards/>}>

            </Route>
          </Routes>
        </Router>
        
        {/* <Rewards/> */}
      </div>
  );
}

export default App;
