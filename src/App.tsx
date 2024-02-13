import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Input from './components/UI/Input';
import Button from './components/UI/Button';
import {Outlet} from "react-router-dom";


function App() {

  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
