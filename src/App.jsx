import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import TextStyleForm from './components/textstyleform/TextStyleForm'
import EditTextStyleForm from './components/edittextstyleform/EditTextstyleForm'
import ViewCart from './components/viewcart/ViewCart'
import ViewBill from './components/viewbill/ViewBill'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<TextStyleForm />} />
          <Route path='/editform/:id' element={<EditTextStyleForm />} />
          <Route path='/viewcart' element={<ViewCart />} />
          <Route path='/viewbill/:id' element={<ViewBill />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
