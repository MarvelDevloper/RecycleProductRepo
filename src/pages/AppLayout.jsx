// import { Outlet } from "react-router-dom";
// import { Header } from "./Header";
// import Footer from "./Footer";

// export function AppLayout(){
//     return(
//         <>
//         <Header/>
//         <Outlet/>
//         <Footer/>
//         </>
//     )
// }



import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import {api} from "../api/fetchTask"; 

export function AppLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check token validity every 5 seconds
    const interval = setInterval(async () => {
      try {
        await api.get("/product/my-claims");
      } catch (err) {
        if (err.response && err.response.status === 401) {
          localStorage.clear(); 
          clearInterval(interval);
          navigate("/login"); 
        }
      }
    }, 60000); 
    return () => clearInterval(interval); // cleanup on unmount
  }, [navigate]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}



// import { Outlet, useNavigate } from "react-router-dom";
// import { Header } from "./Header";
// import Footer from "./Footer";
// import { useEffect } from "react";
// import { api } from "../api/fetchTask"; 

// export function AppLayout() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check first-time user
//     const isFirstTime = !localStorage.getItem("hasVisited");

//     if (isFirstTime) {
//       localStorage.setItem("hasVisited", "true");
//       navigate("/login"); 
//       return; 
//     }

//     // Check token validity every 5 seconds
//     const interval = setInterval(async () => {
//       try {
//         // Call a protected route
//         await api.get("/product/my-claims");
//       } catch (err) {
//         if (err.response && err.response.status === 401 || err.response.status==400) {
//           // Token expired or cookie gone
//           localStorage.clear();
//           clearInterval(interval);
//           navigate("/login"); // redirect to login
//         }
//       }
//     }, 60000); // check every 5 seconds

//     return () => clearInterval(interval); // cleanup on unmount
//   }, [navigate]);

//   return (
//     <>
//       <Header />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }




