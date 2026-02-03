import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import NavBar from "./component/NavBar"
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Feedback from "./component/Feedback";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Register from "./component/Register";


function App() {
  return(
    <BrowserRouter>
      <Routes>

        {/* USER ROUTES */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;

