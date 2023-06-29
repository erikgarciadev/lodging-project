/* eslint-disable react/prop-types */
import React from "react";

const ModalLoginRegisterContext = React.createContext({});

export const useModalLoginRegister = () => {
  return React.useContext(ModalLoginRegisterContext);
};

const ModalLoginRegisterProvider = (props) => {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");

  const handleOpen = (type) => {
    setType(type);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const modalLoginRegisterProviderValue = React.useMemo(
    () => ({
      open,
      type,
      handleClose,
      handleOpen,
    }),
    [open, type, handleClose, handleOpen]
  );
  return (
    <ModalLoginRegisterContext.Provider value={modalLoginRegisterProviderValue}>
      {props.children}
    </ModalLoginRegisterContext.Provider>
  );
};

export default ModalLoginRegisterProvider;
