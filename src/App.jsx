import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import NavBar from './components/NavBar/NavBar';



function App() {
  

  return (
    <>
    <Routes>
     <Route path='/' element={<HomePage />} />
     
    </Routes>
    </>
  )
}

export default App
