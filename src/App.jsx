import { useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
import { useAuth } from "./context/auth";
import { useModalLoginRegister } from "./context/modal-login-register";
import { TYPES_MODAL } from "./utils/constants";

function App() {
  const { user } = useAuth();

  const { handleOpen } = useModalLoginRegister();
  const navigate = useNavigate();
  const handleReservation = (lodging_id) => {
    if (!user) {
      handleOpen(TYPES_MODAL.LOGIN);
      return;
    }

    navigate(`/reservation/${lodging_id}`);
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-screen-2xl mx-auto py-3 px-2 md:px-4 ">
        <h1 className="text-2xl font-bold text-black">Hospedajes</h1>
        <div className="grid mt-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="p-2 bg-white rounded-xl shadow-lg">
            <p className="text-xl font-semibold">Nombre hospedaje</p>
            <p className="text-base font-medium">S/ 200</p>
            <p className="text-base font-medium">Direccio dadadad ad ad n</p>
            <button
              onClick={() => handleReservation(1)}
              className="p-2 mt-3 text-white bg-gray-400 rounded-md font-semibold"
            >
              Reservar
            </button>
          </div>
          <div className="p-2 bg-white rounded-xl shadow-lg">
            <p className="text-lg font-semibold">Nombre hospedaje</p>
            <p className="text-base font-medium">S/ 200</p>
            <p className="text-base font-medium">Direccion</p>
            <button
              onClick={() => handleReservation(1)}
              className="p-2 mt-3 text-white bg-gray-400 rounded-md font-semibold"
            >
              Reservar
            </button>
          </div>
          <div className="p-2 bg-white rounded-xl shadow-lg">
            <p className="text-lg font-semibold">Nombre hospedaje</p>
            <p className="text-base font-medium">S/ 200</p>
            <p className="text-base font-medium">Direccion</p>
            <button
              onClick={() => handleReservation(1)}
              className="p-2 mt-3 text-white bg-gray-400 rounded-md font-semibold"
            >
              Reservar
            </button>
          </div>
          <div className="p-2 bg-white rounded-xl shadow-lg">
            <p className="text-lg font-semibold">Nombre hospedaje</p>
            <p className="text-base font-medium">S/ 200</p>
            <p className="text-base font-medium">Direccion</p>
            <button
              onClick={() => handleReservation(1)}
              className="p-2 mt-3 text-white bg-gray-400 rounded-md font-semibold"
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
