import React, { useState, useContext, createContext } from "react";
import { toast } from "react-toastify";

const axios = require("axios");
const Context = createContext({});

const apiCall = {
  novoUsuario: async ({ nome, sobreNome, email, senha, cpf }) => {
    try {
      const response = await toast.promise(
        axios.post("http://127.0.0.1:3001/karoninha/usuario", {
          nome,
          sobreNome,
          email,
          senha,
          cpf,
        }),
        {
          pending: "Carregando",
          success: "Usuario cadastrado!",
          error: "Erro ao cadastrar",
        }
      );
      return true;
    } catch (err) {
      return false;
    }
  },
  login: async ({ email, senha }) => {
    const response = await toast.promise(
      axios.post("http://127.0.0.1:3001/karoninha/login", {
        senha,
        email,
      }),
      {
        pending: "Carregando",
        success: "Entrando",
        error: "Email ou senha invalida",
      }
    );
    return response;
  },
};
export default function ApiDataContextProvider(props: any) {
  const [appData, setAppData] = useState();
  const [userData, setUserData] = useState();
  return (
    <Context.Provider
      value={{ appData, setAppData, userData, setUserData, apiCall }}
    >
      {props.children}
    </Context.Provider>
  );
}

export function useApiData() {
  const context = useContext(Context);
  const { appData, setAppData, userData, setUserData, apiCall } = context;
  return { appData, setAppData, userData, setUserData, apiCall };
}
