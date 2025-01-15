import { Navbar } from "./components/navbar"
// import { AppSidebar } from "./components/sidebar"
import {  Routes, Route, BrowserRouter as Router } from "react-router-dom"
import { AppSidebar } from "./components/sidebar"
// import { AppSidebar } from "./components/sidebar"

function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <div className="flex">
    <AppSidebar/>
      <Routes>
        <Route path="/" element={<>Hello</>} />
        <Route path="/about" element={<Navbar />} />
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
