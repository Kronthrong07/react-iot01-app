import React from "react"
import { CssBaseline } from "@mui/material"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import CalculateNumber from "../views/CalculateNumber.jsx"
import CalculateMoneyShare from "../views/CalculateMoneyShare.jsx"
import HomeMenu from "../views/HomeMenu.jsx"

function App() {
  return (
    <>
    {/* ใช้ CssBaseline เพื่อ reset รูปแบบ css ทั้งหมด */}
      <CssBaseline />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMenu />} />            
        <Route path="/calnum" element={<CalculateNumber />} />            
        <Route path="/calmoneyshare" element={<CalculateMoneyShare />} />            
      </Routes>    
      </BrowserRouter> 
    </>
  )
}

export default App
