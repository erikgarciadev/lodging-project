/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";

const FormRegister = ({ handleClose, handleSubmit }) => {
  const {
    register,
    handleSubmit: handleSubmitForm,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmitForm(handleSubmit)}>
      <div className="mt-2">
        <div className="flex flex-col gap-1 mb-3">
          <label className="font-semibold">Nombres</label>
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
          <label className="font-semibold">Apellidos</label>
          <input
            {...register("lastname", {
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
          <label className="font-semibold">Email</label>
          <input
            {...register("email", {
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
          <label className="font-semibold">Contraseña</label>
          <input
            {...register("password", {
              required: {
                value: true,
                message: "Requerido",
              },
            })}
            className="w-full border h-9 rounded-xl px-2"
            type="password"
          />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <label className="font-semibold">Edad</label>
          <input
            {...register("age", {
              required: {
                value: true,
                message: "Requerido",
              },
            })}
            className="w-1/3 border h-9 rounded-xl px-2"
            type="number"
          />
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <label className="font-semibold">Género</label>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <input
                {...register("gender", {
                  required: {
                    value: true,
                    message: "Requerido",
                  },
                })}
                value="female"
                className=""
                type="radio"
              />
              <p>Masculino</p>
            </div>
            <div className="flex items-center gap-1">
              <input
                {...register("gender", {
                  required: {
                    value: true,
                    message: "Requerido",
                  },
                })}
                value="male"
                type="radio"
              />
              <p>Femenino</p>
            </div>
          </div>
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
          Registrarse
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
