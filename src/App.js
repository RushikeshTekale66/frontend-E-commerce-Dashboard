import './App.css';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import Signup from './Component/Signup';
import PrivateComponent from './Component/PrivateComponent';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import ProductList from './Component/ProductsList';
import UpdateProduct from './Component/UpdateProduct';
import Profile from './Component/Profile';
import About from './Component/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>

          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<ProductList/>}></Route>
          <Route path='/add' element={<AddProduct/>}></Route>
          <Route path='/update/:id' element={<UpdateProduct/>}></Route>
          <Route path='/logout' element={<h1>Log ou From Page</h1>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          </Route>

          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
