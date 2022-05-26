import React, { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Box from "@mui/material/Box";

import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { GrCar } from "react-icons/gr";
import { MdTravelExplore, MdAccountCircle } from "react-icons/md";
import BuscaViagem from "./components/BuscaViagem";
function App() {
  const [page, setPage] = useState(<h1>page</h1>);
  const [menuCollapse, setMenuCollapse] = useState(false);
  const headerComponents = [
    {
      name: "Perquisar Viagens",
      value: <BuscaViagem />,
      icon: <MdTravelExplore />,
    },
    {
      name: "Nova Viagem",
      value: <h1>Nova viagem</h1>,
      icon: <GrCar />,
    },
    {
      name: "Perfil",
      value: <h1>Perfil</h1>,
      icon: <MdAccountCircle />,
    },
  ];
  return (
    <div className="App">
      <Box
        sx={{
          width: "100%",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Header
          setPage={setPage}
          menuCollapse={menuCollapse}
          setMenuCollapse={setMenuCollapse}
          components={headerComponents}
        ></Header>
        {page}
      </Box>
    </div>
  );
}

export default App;
