
import './App.css'
import Header from '@components/Header';
import { Outlet } from "react-router-dom";
import Footer from '@components/Footer';


function App() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  return (
    <>
      <Header></Header>
        <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
