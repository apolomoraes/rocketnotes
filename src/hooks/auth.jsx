import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import { Toast } from "../Toast";


export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);

      // inserir um token do tipo Bearer de autorização no cabeçalho por padrão de todas as requisições que o usuário irá fazer.
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });

    } catch (error) {
      if (error.response) {
        Toast().handleError(error.response.data.message);
      } else {
        Toast().handleError("Não foi possível entrar, tente novamente mais tarde");
      }
    }
  }

  //está função é para sair da conta
  function signOut() {
    localStorage.removeItem("@rocketnotes:token");
    localStorage.removeItem("@rocketnotes:user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      user: data.user,
      signOut
    }} >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
};