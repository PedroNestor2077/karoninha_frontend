import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useApiData } from "../../context/ApiContext";
import { toast } from "react-toastify";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ListaViagens from "../ListaViagens";

export default function Buscar() {
  const [dateValue, setDateValue] = useState();
  const { apiCall } = useApiData();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const partida = data.get("partida");
    const chegada = data.get("chegada");
    console.log({ partida, chegada, dtHoraPartida: dateValue });
  };

  return (
    <Container sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="partida"
            label="Origem"
            name="partida"
            autoFocus
            variant="standard"
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="chegada"
            label="Destino"
            id="chegada"
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Data Partida"
              value={dateValue}
              onChange={(newValue) => {
                setDateValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Buscar
          </Button>
        </Box>

        <ListaViagens />
      </Box>
    </Container>
  );
}
