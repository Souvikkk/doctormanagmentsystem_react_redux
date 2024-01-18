import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import DoctorSingle from "./components/pages/DoctorSingle";
import DeptSingle from "./components/pages/DeptSingle";
import BlogSingles from "./components/pages/BlogSingles";
import AppointmentForm from "./components/core/AppointmentForm";
import Appointment from "./components/core/Appointment";
import DashBoard from "./components/Layout/DashBoard";
import { useEffect } from "react";

import Login from "./components/pages/Authentication/Login";
import Register from "./components/pages/Authentication/Register";
import Doctors from "./components/pages/Doctors";
import Department from "./components/pages/Department";
import Contact from "./components/pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DoctorsByDep from "./components/core/DoctorsByDep";
import { useDispatch } from "react-redux";
import { check_token } from "./Redux/AuthSlice";


function App() {

  const ProtectedRoute = ({children})=>{
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    return token!==undefined && token !== null && token !=='' ? 
    (children ) : ( <Navigate to = '/login'/> )
  }
  const dispatch =useDispatch()
  useEffect(()=>{
     dispatch(check_token())
  },[])

  const publicpage = [
    {
      path: "/",
      component: <Home />
    },
    {
     path:'/login',
     component:<Login/>
    },
    {
      path: "/register",
      component: <Register/>
    },
 
    {
      path: "/about",
      component: <About />
    },
    {
      path: "/services",
      component: <Services />
    },
   
    {
      path: "/departments",
      component:<Department/>
    },
    
    {
      path: "/doctors",
     component:<Doctors/>
    },
   
    {
   
      path: "/all-doctors/:id",
      component: <DoctorsByDep />
    },

    {
      path: "/blog",
      component: <Blog />
    },
    {
      path: "/contact",
      component:<Contact/> 
    },
    {
      path: "/doctor-single/:id",
      component: <DoctorSingle />
    },
    {
      path: "/department-single",
      component: <DeptSingle />
    },
    {
      path: "/blog-single/:id",
      component: <BlogSingles />
    },
  ];
  const privatepage =[
    {
      path:'/appointmentform',
      component:<AppointmentForm/>
    },
    {
      path:'/appointment/:id',
      component:<Appointment/>
    },
    {
      path:'/dashboard',
      component:<DashBoard/>
    },

  ]
  return (
    <>
      <Router>
      <ToastContainer />
        <Routes>
          {
            publicpage?.map((route,index)=>{
              return(
                <Route 
                key={index+1}
                exact
                path={route.path}
                element={route?.component}/>
              )
            })
          }
          {
            privatepage?.map((route,index)=>{
              return (
                <Route
                key={index+1}
                path={route.path}
                element={<ProtectedRoute>{route?.component} </ProtectedRoute> }/>
              )
            })
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
