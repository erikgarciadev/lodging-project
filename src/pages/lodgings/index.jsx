import React from "react";
import Navbar from "../../components/navbar";
import ModalForm from "../../components/utils/modals/modal-form";
import CreateLodgingForm from "../../components/lodgins/forms/create";

const LodgingsPage = () => {
  const [open, setOpen] = React.useState(false);
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
          <div className="p-2 bg-white rounded-xl shadow-lg">
            <p className="text-xl font-semibold">Nombre hospedaje</p>
            <p className="text-base font-medium">S/ 200</p>
            <p className="text-base font-medium">Direccio dadadad ad ad n</p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setOpen(true)}
                className="p-2 text-white bg-yellow-500  rounded-md font-semibold"
              >
                Editar
              </button>
              <button className="p-2  bg-red-500 text-white  rounded-md font-semibold">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalForm
        title="Crear hospedaje"
        open={open}
        handleClose={() => setOpen(false)}
      >
        <CreateLodgingForm handleClose={() => setOpen(false)} />
      </ModalForm>
    </div>
  );
};

export default LodgingsPage;
