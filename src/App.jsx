import Main from "./pages/Main.jsx"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Member from "./pages/Member.jsx"
import Mikrotik from "./pages/Mikrotik.jsx"
import './stylesheet/main.css'
import Navbar from "./partials/core/Navbar.jsx";
import Footer from "./partials/core/Footer.jsx";

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/member' element={<Member/>}/>
          <Route path='/mikrotik' element={<Mikrotik/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App
