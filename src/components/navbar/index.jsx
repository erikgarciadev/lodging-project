import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useModalLoginRegister } from "../../context/modal-login-register";
import { TYPES_MODAL } from "../../utils/constants";
import ModalLoginRegister from "../modal-login-register";

const Navbar = () => {
  const { user, updateUser } = useAuth();

  const { handleOpen } = useModalLoginRegister();

  return (
    <>
      <nav className="h-16  w-full shadow-lg">
        <div className="flex justify-between gap-3 h-full  max-w-screen-2xl px-2 md:px-4 mx-auto items-center">
          <div className="flex items-center gap-2">
            <Link
              className="text-sm md:text-lg text-gray-700 font-semibold"
              to="/"
            >
              Hospedajes
            </Link>
            {user ? (
              <Link
                className="text-sm md:text-lg text-gray-700 font-semibold"
                to="/lodgings"
              >
                Agregar Hospedajes
              </Link>
            ) : null}
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <p className="text-sm md:text-lg text-black font-semibold">
                  {user.name ?? ""} {user.lastname ?? ""}
                </p>
                <button
                  onClick={() => updateUser(null)}
                  className="text-sm md:text-lg text-gray-700 font-semibold"
                >
                  Cerrar sesion
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleOpen(TYPES_MODAL.LOGIN)}
                  className="text-sm md:text-lg text-gray-700 font-semibold"
                >
                  Iniciar sesion
                </button>
                <button
                  onClick={() => handleOpen(TYPES_MODAL.REGISTER)}
                  className="text-sm md:text-lg text-gray-700 font-semibold"
                >
                  Registrarse
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      <ModalLoginRegister />
    </>
  );
};

export default Navbar;
