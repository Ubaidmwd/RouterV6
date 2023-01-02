// import logo from './logo.svg';
import './App.css';
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Error from './Error';
import {Routes,Route} from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <h1>Router Version 6</h1>
      
      <Routes>
        <Route path="/" element={<Navbar />}>

        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/aboutus/:id" element={<About id />} />
        <Route path="/login" element={<Login />} />

        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
     
    </div>
  );
}

export default App;
