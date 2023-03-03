import { createContext, useContext, useState } from 'react';
import { api } from '../services/api';
import { Toast } from "../Toast";


export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      // inserir um token do tipo Bearer de autorização no cabeçalho por padrão de todas as requisições que o usuário irá fazer.
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token })

    } catch (error) {
      if (error.response) {
        Toast().handleError(error.response.data.message);
      } else {
        Toast().handleError("Não foi possível entrar, tente novamente mais tarde");
      }
    }

  }
  return (
    <AuthContext.Provider value={{ signIn, user: data.user }} >
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