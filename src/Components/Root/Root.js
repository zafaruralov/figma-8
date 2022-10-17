import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from '../../Components/Login/Login';
import Navbar from '../../Components/Navbar/Navbar';
import Constructure from '../constructure/Constructure';

function Root() {
  return (
    <div className="Root">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/mahsulotlar'element={<Constructure />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Root;
