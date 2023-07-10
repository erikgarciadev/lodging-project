import React from "react";
import Navbar from "../../components/navbar";
import ModalForm from "../../components/utils/modals/modal-form";
import CreateLodgingForm from "../../components/lodgins/forms/create";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../utils/config";
import { CONFIG_TOAST, URL_IMAGE } from "../../utils/constants";
import { useAuth } from "../../context/auth";

const LodgingsPage = () => {
  const { user } = useAuth();

  const [open, setOpen] = React.useState(false);
  const [lodgings, setLogings] = React.useState([]);

  const getLodgings = async () => {
    if (!user?._id) return;
    const response = await axios.get(
      `${API_URL}/api/users/${user._id}/lodgings`
    );

    setLogings(response?.data ?? []);
  };

  React.useEffect(() => {
    getLodgings();
  }, [user]);

  const handleClose = () => setOpen(false);

  const handleSubmit = async (data) => {
    try {
      await axios.post(`${API_URL}/api/lodgings`, {
        name: data.name,
        location: data.location,
        price: Number(data.price),
        num_rooms: Number(data.num_rooms),
        image: URL_IMAGE,
        _id: user._id,
      });

      toast.success("Se creo el hospedaje con éxito", CONFIG_TOAST);
      handleClose();
      await getLodgings();
    } catch (error) {
      toast.error("Ocurrio un error. Vuelve a intentarlo", CONFIG_TOAST);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto py-3 px-2 md:px-4 ">
        <div className="flex justify-end my-4">
          <button
            onClick={() => setOpen(true)}
            className="text-xl px-4 py-2 rounded-md bg-green-500 font-bold text-white"
          >
            Agregar Hospedaje
          </button>
        </div>

        <div className="grid mt-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {lodgings.map((lodging) => (
            <div
              key={lodging._id}
              className="p-2 bg-white rounded-xl shadow-lg"
            >
              <p className="text-xl font-semibold">{lodging.name}</p>
              <p className="text-base font-medium">S/ {lodging.price}</p>
              <p className="text-base font-medium">{lodging.location}</p>
              <div className="flex gap-2 mt-4">
                <button
                  // onClick={() => setOpen(true)}
                  className="p-2 text-white bg-yellow-500  rounded-md font-semibold"
                >
                  Editar
                </button>
                <button className="p-2  bg-red-500 text-white  rounded-md font-semibold">
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalForm title="Crear hospedaje" open={open} handleClose={handleClose}>
        <CreateLodgingForm
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        />
      </ModalForm>
    </div>
  );
};

export default LodgingsPage;
