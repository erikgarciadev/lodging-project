/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";

const CreateLodgingForm = ({ handleClose, handleSubmit }) => {
  const {
    register,
    handleSubmit: handleSubmitForm,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmitForm(handleSubmit)}>
      <div className="mt-2">
        <div className="flex flex-col gap-1 mb-3">
          <label>Nombre</label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Requerido",
              },
            })}
            className="w-full border h-9 rounded-xl px-2"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <label>Dirección</label>
          <input
            {...register("location", {
              required: {
                value: true,
                message: "Requerido",
              },
            })}
            className="w-full border h-9 rounded-xl px-2"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <label>Número de habitaciones</label>
          <input
            {...register("num_rooms", {
              required: {
                value: true,
                message: "Requerido",
              },
            })}
            className="w-full border h-9 rounded-xl px-2"
            type="number"
          />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <label>Precio por día</label>
          <input
            {...register("price", {
              required: {
                value: true,
                message: "Requerido",
              },
            })}
            className="w-full border h-9 rounded-xl px-2"
            type="number"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-semibold text-white  focus:outline-none"
          onClick={handleClose}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white  focus:outline-none"
        >
          Crear hospedaje
        </button>
      </div>
    </form>
  );
};

export default CreateLodgingForm;
