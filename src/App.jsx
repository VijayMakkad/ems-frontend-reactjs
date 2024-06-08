import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ListEmployee from './component/ListEmployee/ListEmployee'
import Header from './component/Header/Header'
import AddEmployee from './component/EmployeeComponent/EmployeeComponent'
import Footer from './component/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <div className='container'>
        <Routes>
          {/* //http:localhost:3000 */}
          <Route path='/' element={<ListEmployee/>}></Route>
          {/* //http:localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployee/>}></Route>
          {/* http:localhost:3000/addEmployee */}
          <Route path='/addEmployee' element={<AddEmployee/>}></Route>
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
