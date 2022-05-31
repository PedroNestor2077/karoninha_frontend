import React, { useState, useContext, createContext } from "react";
import { toast } from "react-toastify";

const axios = require("axios");
const Context = createContext({});

const apiCall = {
  novoUsuario: async ({ nome, sobreNome, email, senha, cpf, telefone }) => {
    try {
      const response = await toast.promise(
        axios.post("http://127.0.0.1:4000/karoninha/usuario", {
          nome,
          sobreNome,
          email,
          senha,
          cpf,
          telefone,
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
      axios.post("http://127.0.0.1:4000/karoninha/login", {
        senha,
        email,
      }),
      {
        pending: "Carregando",
        success: "Entrando",
        error: "Email ou senha invalida",
      }
    );
    return response.status == 200;
  },
  novaViagem: async (body) => {
    try {
      const response = await toast.promise(
        axios.post("http://127.0.0.1:4000/karoninha/novaCorrida", body),
        {
          pending: "Carregando",
          success: "Viagem cadastrada!",
          error: "Erro ao criar viagem",
        }
      );
      console.log(response);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  buscaViagem: async (body) => {
    try {
      console.log(body);
      const response = await axios.post(
        "http://127.0.0.1:4000/karoninha/corridas",
        {}
      );
      return response.data.result;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
};
export default function ApiDataContextProvider(props: any) {
  const [appData, setAppData] = useState();
  const [userData, setUserData] = useState();

  return (
    <Context.Provider
      value={{
        appData,
        setAppData,
        userData,
        setUserData,
        apiCall,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export function useApiData() {
  const context = useContext(Context);
  const { appData, setAppData, userData, setUserData, apiCall } = context;
  return {
    appData,
    setAppData,
    userData,
    setUserData,
    apiCall,
  };
}
