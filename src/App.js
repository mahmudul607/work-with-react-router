import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import UserDetails from './Components/UserDetails/UserDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/home' element={<Home></Home>} />
          <Route exact path='/' element={<Home></Home>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/blog' element={<Blogs></Blogs>} />
          <Route path='/person/:PersonId' element={<UserDetails></UserDetails>} />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
