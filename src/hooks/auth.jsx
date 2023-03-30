import { createContext, useContext, useState, useEffect } from 'react';
import { Loading } from '../components/Loading';
import { api } from '../services/api';
import { Toast } from "../Toast";


export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(false);

  async function signIn({ email, password }) {
    setShowLoading(true);
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);

      // inserir um token do tipo Bearer de autorização no cabeçalho por padrão de todas as requisições que o usuário irá fazer.
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {

      if (error.response) {
        Toast().handleError(error.response.data.message);
      } else {
        Toast().handleError("Não foi possível entrar, tente novamente mais tarde");
      }
    }
    setShowLoading(false);
  }

  //está função é para sair da conta
  function signOut() {
    localStorage.removeItem("@rocketnotes:token");
    localStorage.removeItem("@rocketnotes:user");

    setData({});
  }

  //função para atualizar informação do usuário
  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);

      user.password = '';
      user.new_password = '';
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

      setData({ user, token: data.token });
      Toast().handleSuccess("Perfil Atualizado!");

    } catch (error) {
      if (error.response) {
        Toast().handleError(error.response.data.message);
      } else {
        Toast().handleError("Não foi possível atualizar o perfil, tente novamente mais tarde");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      showLoading,
      signOut,
      updateProfile,
      user: data.user,
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