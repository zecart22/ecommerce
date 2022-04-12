import { useState, createContext, useContext } from "react";
import jwt_decode from "jwt-decode";
import { toast } from "@chakra-ui/react";
import { useHistory } from "react-router";

import { api } from "../../services";

export const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const access = localStorage.getItem("@ecommerce:access");
    const user = localStorage.getItem("@ecommerce:user");

    if (access && user) {
      return { access, user: JSON.parse(user) };
    }

    return {};
  });

  const history = useHistory();

  const signIn = (data) => {
    api
      .post("clients/", data)
      .then((response) => {
        const { access } = response.data;

        const user = jwt_decode(access);

        localStorage.setItem("@:access", access);
        localStorage.setItem("@ecommerce:user", JSON.stringify(user));

        setData({ access, user });
        history.push("/");

        toast.success("Login realizado com sucesso!");
      })
      .catch((err) => toast.error("Email ou senha inválida"));
  };

  const signOut = () => {
    localStorage.removeItem("@ecommerce:token");
    localStorage.removeItem("@ecommerce:user");

    setData({});
  };

  return (
    <AuthContext.Provider
      value={{ access: data.access, user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
