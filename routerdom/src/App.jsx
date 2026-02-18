import { BrowserRouter, Routes, Route } from "react-router-dom"
import LogIn from "./LogIn.jsx" // ✅ LogIn component
import Navbar from "./Navbar.jsx" // ✅ Navbar component (file banani hogi)
import Footer from "./Footer.jsx" // ✅ Footer component (file banani hogi)
import SignUp from "./SignUp.jsx" // ✅ Footer component (file banani hogi)
import Home from "./Home.jsx" // ✅ Footer component (file banani hogi)

const App = () => {
  console.log("sadasdada");
  return (
    <>
    <h1>sddddadadadas</h1>
      <BrowserRouter>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        <hr />
        <Footer />
      </BrowserRouter>
        
    </>
  )
}

export default App
