import { Route,Routes,BrowserRouter } from "react-router-dom"
import MainWrapper from "./layouts/MainWrapper"
import PrivateRoute from "./layouts/PrivateRoute"
import Register from "./views/auth/Register"
import Login from "./views/auth/Login"
import Logout from "./views/auth/Logout"
import ForgotPassword from "./views/auth/ForgotPassword"
import CreateNewPassword from "./views/auth/CreateNewPassword"
import Index from "./views/base/Index"
import CourseDetail from "./views/base/CourseDetail"
import Cart from "./views/base/Cart"
import { useContext,useState,useEffect } from "react"
import { CartContext } from "./views/plugin/context"
import apiInstance from "./utils/axios"
import CartId from "./views/plugin/CartId"
import Checkout from "./views/base/Checkout"
import Success from "./views/base/Success"
import Search from "./views/base/Search"
import Profile from "./views/student/Profile"
import ChangePassword from "./views/student/ChangePassword"
import Dashboard from "./views/student/Dashboard"
import Courses from "./views/student/Courses"
import StudentCourseDetail from "./views/student/CourseDetail"


function App() {
const {cartCount,setCartCount}=useContext(CartContext)
  
  useEffect(()=>{
    apiInstance.get(`course/cart-list/${CartId()}`)
    .then((res)=>{
      setCartCount(res.data?.length);
    })
    
    console.log(cartCount)
      

  },[])
    


  return (
    <BrowserRouter>
    <MainWrapper>
      <Routes>
        <Route path="/register/" element={<Register/>}/>
        <Route path="/login/" element={<Login/>}/>
        <Route path="/logout/" element={<Logout/>}/>
        <Route path="/forgot-password/" element={<ForgotPassword/>}/>
        <Route path="/create-new-password/" element={<CreateNewPassword/>}/>
        
        {/* Base Routes */}

        <Route path="/" element={<Index/>}/>
        <Route path="/course/course-detail/:slug/" element={<CourseDetail cartCount={cartCount} setCartCount={setCartCount}/>}/>
        <Route path="/cart/" element={<Cart/>}/>
        <Route path="/checkout/:oid/" element={<Checkout/>}/>
        <Route path="/payment-success/:order_oid" element={<Success/>}/>
        <Route path="/search/" element={<Search/>}/>
        <Route path="/search/" element={<Search/>}/>
        <Route path="/student/profile/" element={<Profile/>}/>
        <Route path="/student/change-password/" element={<ChangePassword/>}/>
        <Route path="/student/dashboard/" element={<Dashboard/>}/>
        <Route path="/student/courses/" element={<Courses/>}/>
        <Route path="/student/courses/:enrollment_id/" element={<StudentCourseDetail/>}/>
      </Routes>
    </MainWrapper>
    </BrowserRouter>
   
  )
}

export default App
