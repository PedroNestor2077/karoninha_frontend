import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { toast } from "react-toastify";
import { useApiData } from "../../context/ApiContext";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const { apiCall } = useApiData();
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      email: data.get("email"),
      senha: data.get("password"),
      nome: data.get("primeiroNome"),
      sobreNome: data.get("segundoNome"),
      cpf: data.get("cpf"),
      cnh: data.get("cnh") ? data.get("cnh") : null,
    };
    const isUserCreated = await apiCall.novoUsuario(body);
    if (isUserCreated) navigate("/login");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastre-se
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="primeiroNome"
            label="Primeiro Nome"
            name="primeiroNome"
            autoComplete="primeiroNome"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="segundoNome"
            label="Segundo Nome"
            name="segundoNome"
            autoComplete="segundoNome"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="cpf"
            label="CPF"
            name="cpf"
            autoComplete="cpf"
            autoFocus
            type="number"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="cnh"
            label="CNH (Opcional)"
            name="cnh"
            autoComplete="cnh"
            autoFocus
            type="number"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Confirmar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {"Ja possui uma conta? Entrar"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
