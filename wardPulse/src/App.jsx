
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CitizenLayout from './components/citizen/Layout/CitizenLayout'
import Home from './components/citizen/Pages/Home'
import About from './components/citizen/Pages/About'
import Contact from './components/citizen/Pages/Contact'
import Services from './components/citizen/Pages/Services'
import Layout from './components/admin/Layout/Layout'
import Dashboard from './components/admin/Dashboard'
import ManageCategory from './components/admin/Category/ManageCategory'
import AddCategory from './components/admin/Category/AddCategory'
import { ToastContainer } from 'react-toastify'
import ManageCity from './components/admin/City/ManageCity'
import AddCity from './components/admin/City/AddCity'
import AddWard from './components/admin/Ward/AddWard'
import ManageWard from './components/admin/Ward/ManageWard'
import ManageComplaint from './components/admin/Complaint/ManageComplaint'
import AddComplaint from './components/admin/Complaint/AddComplaint'
import ManageUser from './components/admin/User/ManageUser'
import AddUser from './components/admin/User/AddUser'
import Login from './auth/login'
import Register from './auth/register'



export default function App()
{
  return(
<>
<BrowserRouter>
<Routes>
  {/* citizen module routes */}
<Route path='/' element={<CitizenLayout/>}>
<Route path='/' element={< Home/>}/>
<Route path='/about' element={<About/>}/>

<Route path='/contact' element={<Contact/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={< Register/>}/>
</Route>

<Route path='/admin' element={<Layout/>}>

<Route index element={<Dashboard/>}/>
<Route path='Categories' element={<ManageCategory/>}/>
<Route path='category/add' element={<AddCategory/>}/>

<Route path='city' element={<ManageCity/>}/>
<Route path='city/add' element={<AddCity/>}/>

<Route path='wards' element={<ManageWard/>}/>
<Route path='Ward/add' element={<AddWard/>}/>

<Route path='complaints' element={<ManageComplaint/>}/>
<Route path='Complaint/add' element={<AddComplaint/>}/>

<Route path='users' element={<ManageUser/>}/>
<Route path='User/add' element={<AddUser/>}/>
</Route>


</Routes>
<ToastContainer/>




</BrowserRouter>
    
    
    </>
  )
}
