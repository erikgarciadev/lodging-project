/* eslint-disable react/prop-types */
import React from "react";

const AuthContext = React.createContext({});

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    if (!localStorage.getItem("user")) return;

    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const updateUser = React.useCallback((dataUser) => {
    setUser(dataUser);
    if (dataUser === null) {
      localStorage.removeItem("user");
      return;
    }
    localStorage.setItem("user", JSON.stringify(dataUser));
  }, []);

  const authProviderValue = React.useMemo(
    () => ({
      user,
      updateUser,
    }),
    [user, updateUser]
  );
  return (
    <AuthContext.Provider value={authProviderValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
