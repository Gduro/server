import "./App.css";
import { Blog, Footer, Header, Opinions, About, System, Full,Panelw , Galler, Login, PortfolioGall, Stage, Coach} from "./containers";
import { NavBar } from "./components/t/index";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import ProtectedRoute from "./components/ProtectedRoute";
import * as React from 'react'
function App() {
  return (
    <div className="App">

      <AuthContextProvider  >
      <NavBar />

        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route  path="/" element={<Full/>} />
          <Route path="/zglos" element={<System/>} />
          {/* <Route path="/panel" element={<Panelw/>} /> */}
           <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/panel"
            element={
              <ProtectedRoute>
                <Panelw />
              </ProtectedRoute>
            }
          />
          <Route path="/portfolio" element={<PortfolioGall/>} />
          <Route path="/stage" element={<Stage/>} />
          <Route path="/coaching" element={<Coach/>} />


        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
