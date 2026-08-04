
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CitizenLayout from './components/citizen/Layout/CitizenLayout'
import Home from './components/citizen/Pages/Home'
import About from './components/citizen/Pages/About'
import Contact from './components/citizen/Pages/Contact'

import Layout from './components/admin/Layout/Layout'
import Dashboard from './components/admin/Dashboard'
import ManageCategory from './components/admin/Category/ManageCategory'
import { ToastContainer } from 'react-toastify'
import ManageCity from './components/admin/City/ManageCity'
import ManageWard from './components/admin/Ward/ManageWard'
import ManageComplaint from './components/admin/Complaint/ManageComplaint'
import ManageUser from './components/admin/User/ManageUser'
import ManageContact from './components/admin/Contact/ManageContact'
import Login from './auth/login'
import Register from './auth/register'

import Category from './components/citizen/Pages/Category'
import City from './components/citizen/Pages/City'
import Ward from './components/citizen/Pages/Ward'
import Form from './components/citizen/Pages/Form'
import ManageProfile from './components/citizen/Pages/ManageProfile'
import MyComplaints from './components/citizen/Pages/MyComplaints'



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* citizen module routes */}
          <Route path='/' element={<CitizenLayout />}>
            <Route path='/' element={< Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/category' element={<Category />} />
            <Route path='/City/:categoryId' element={<City />} />
            <Route path='/Ward/:categoryId/:cityId' element={<Ward />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/form/:categoryId/:cityId/:wardId' element={<Form />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={< Register />} />
            <Route path='/profile' element={<ManageProfile />} />
            <Route path='/my-complaints' element={<MyComplaints />} />
          </Route>

          <Route path='/admin' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='categories' element={<ManageCategory />} />
            <Route path='city' element={<ManageCity />} />
            <Route path='wards' element={<ManageWard />} />
            <Route path='complaints' element={<ManageComplaint />} />
            <Route path='users' element={<ManageUser />} />
            <Route path='contacts' element={<ManageContact />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}
