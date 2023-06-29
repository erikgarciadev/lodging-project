import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Navbar = () => {
  const { user } = useAuth();
  
  return (
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
              to="/"
            >
              Agregar Hospedajes
            </Link>
          ) : null}
        </div>
        <div className="flex items-center gap-3">
          {!user ? (
            <p className="text-sm md:text-lg text-black font-semibold">
              Usuario
            </p>
          ) : (
            <>
              <button className="text-sm md:text-lg text-gray-700 font-semibold">
                Iniciar sesion
              </button>
              <button className="text-sm md:text-lg text-gray-700 font-semibold">
                Registrarse
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
