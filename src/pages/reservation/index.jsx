import { useNavigate } from "react-router-dom";

const ReservationPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-screen-2xl h-screen mx-auto py-3 px-2 md:px-4 ">
      <div className="h-full flex justify-center mx-auto w-full md:w-2/3 items-center">
        <div className="w-full rounded-lg p-4 shadow-lg  items-center">
          <div className="flex justify-between w-full gap-3 flex-row md:gap-20">
            <div>
              <h2 className="font-semibold text-xl">Datos hospedaje</h2>

              <p>Nombre hospedaje</p>
              <p>Direccion hospedaje</p>
              <p>Precio hospedaje</p>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Datos usuario</h2>
              <p>Nombre usuario</p>
            </div>
          </div>
          <div className=" mt-2 w-full gap-3">
            <div className="flex flex-col gap-1 mb-3">
              <label className="font-semibold">Fecha de inicio</label>
              <input className="w-52 border h-9 rounded-xl px-2" type="date" />
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <label className="font-semibold">Cantidad de dias</label>
              <input
                className="w-52 border h-9 rounded-xl px-2"
                type="number"
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-semibold text-white  focus:outline-none"
                onClick={handleBack}
              >
                Cancelar
              </button>
              <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white  focus:outline-none">
                Confirmar reserva
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
