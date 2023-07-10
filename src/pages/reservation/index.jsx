import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { API_URL } from "../../utils/config";
import { toast } from "react-toastify";
import { CONFIG_TOAST } from "../../utils/constants";
import { useForm } from "react-hook-form";
import React from "react";

const ReservationPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { lodging_id } = useParams();
  const [lodging, setLodging] = React.useState(null);

  const { register, handleSubmit } = useForm();

  if (!user) navigate("/");

  React.useEffect(() => {
    getLodging();
  }, [lodging_id]);

  const getLodging = async () => {
    if (!lodging_id) return;
    const response = await axios.get(`${API_URL}/api/lodgings/${lodging_id}`);

    setLodging(response?.data ?? null);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleConfirm = async (data) => {
    try {
      await axios.post(`${API_URL}/api/bookings`, {
        date: data.date,
        idLodging: lodging_id,
        email: user.email,
        num_days: Number(data.num_days),
      });

      toast.success("Se realizo la reserva con éxito", CONFIG_TOAST);

      handleBack();
    } catch (error) {
      toast.error("Ocurrio un error. Vuelve a intentarlo", CONFIG_TOAST);
    }
  };

  return (
    <div className="max-w-screen-2xl h-screen mx-auto py-3 px-2 md:px-4 ">
      <div className="h-full flex justify-center mx-auto w-full md:w-2/3 items-center">
        <div className="w-full rounded-lg p-4 shadow-lg  items-center">
          <div className="flex justify-between w-full gap-3 flex-row md:gap-20">
            <div>
              <h2 className="font-semibold text-xl">Datos hospedaje</h2>

              <p>{lodging?.name}</p>
              <p>{lodging?.location}</p>
              <p>S/ {lodging?.price}</p>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Datos usuario</h2>
              <p>
                {user.name} {user.lastname}
              </p>
            </div>
          </div>
          <div className=" mt-2 w-full gap-3">
            <div className="flex flex-col gap-1 mb-3">
              <label className="font-semibold">Fecha de inicio</label>
              <input
                {...register("date", {
                  required: {
                    value: true,
                    message: "Requerido",
                  },
                })}
                className="w-52 border h-9 rounded-xl px-2"
                type="date"
              />
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <label className="font-semibold">Cantidad de dias</label>
              <input
                {...register("num_days", {
                  required: {
                    value: true,
                    message: "Requerido",
                  },
                })}
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
              <button
                onClick={handleSubmit((data) => handleConfirm(data))}
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white  focus:outline-none"
              >
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
