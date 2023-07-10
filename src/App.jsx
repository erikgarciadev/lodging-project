import { useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
import { useAuth } from "./context/auth";
import { useModalLoginRegister } from "./context/modal-login-register";
import { TYPES_MODAL } from "./utils/constants";
import React from "react";
import axios from "axios";
import { API_URL } from "./utils/config";

function App() {
  const { user } = useAuth();

  const { handleOpen } = useModalLoginRegister();

  const [lodgings, setLodgings] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getAllLodgings();
  }, []);

  const getAllLodgings = async () => {
    const response = await axios.get(`${API_URL}/api/lodgings`);
    setLodgings(response.data ?? []);
  };

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
          {lodgings.map((lodging) => (
            <div
              key={lodging._id}
              className="p-2 bg-white rounded-xl shadow-lg"
            >
              <p className="text-xl font-semibold">{lodging.name}</p>
              <p className="text-base font-medium">S/ {lodging.price}</p>
              <p className="text-base font-medium">{lodging.location}</p>
              <button
                onClick={() => handleReservation(lodging._id)}
                className="p-2 mt-3 text-white bg-gray-400 rounded-md font-semibold"
              >
                Reservar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
