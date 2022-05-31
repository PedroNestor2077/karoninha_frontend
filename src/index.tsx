import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiDataContextProvider from "./context/ApiContext";
import { ToastContainer } from "react-toastify";
ReactDOM.render(
  <React.StrictMode>
    <ApiDataContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={true ? <Login /> : <App />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ApiDataContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
