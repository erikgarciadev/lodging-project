import { Dialog, Transition } from "@headlessui/react";
import { useModalLoginRegister } from "../../context/modal-login-register";
import React from "react";
import { CONFIG_TOAST, TYPES_MODAL } from "../../utils/constants";
import FormLogin from "./forms/login";
import { useAuth } from "../../context/auth";
import FormRegister from "./forms/register";
import axios from "axios";
import { API_URL } from "../../utils/config";
import { toast } from "react-toastify";

const ModalLoginRegister = () => {
  const { open, type, handleClose } = useModalLoginRegister();
  const { updateUser } = useAuth();

  const renderTitle = () => {
    if (type === TYPES_MODAL.LOGIN) return "Iniciar sesion";

    return "Registrarse";
  };

  const handleSubmitLogin = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: data.email,
        password: data.password,
      });

      const user = response.data;
      updateUser(user);

      toast.success("Se inicio sesión con éxito", CONFIG_TOAST);

      handleClose();
    } catch (error) {
      toast.error("Ocurrio un error. Vuelve a intentarlo", CONFIG_TOAST);
    }
  };

  const handleSubmitRegister = async (data) => {
    try {
      await axios.post(`${API_URL}/api/users`, {
        name: data.name,
        lastname: data.lastname,
        age: Number(data.age),
        email: data.email,
        gender: data.gender,
        password: data.password,
      });

      toast.success("Se registro el usuario con exito", CONFIG_TOAST);

      handleClose();
    } catch (error) {
      toast.error("Ocurrio un error. Vuelve a intentarlo", CONFIG_TOAST);
    }
  };

  const renderContent = () => {
    if (type === TYPES_MODAL.LOGIN)
      return (
        <FormLogin handleClose={handleClose} handleSubmit={handleSubmitLogin} />
      );

    return (
      <FormRegister
        handleClose={handleClose}
        handleSubmit={handleSubmitRegister}
      />
    );
  };

  return (
    <Transition appear show={open} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl mb-5 font-medium  text-gray-900"
                >
                  {renderTitle()}
                </Dialog.Title>
                <div>{renderContent()}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalLoginRegister;
