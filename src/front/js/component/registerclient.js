import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import REG1 from "../../img/REG1.jpg";

export const Registerclient = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    actions.addRegister(data);
    navigate("/");
  };

  const activarRegistro = watch("aceptarterminos");
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center h-75 mb-5">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black border border-0">
            <div className="card-body p-md-5 border border-0">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <h2 className="text-center mb-4">Registro para clientes</h2>

                  <form
                    className="mx-1 mx-md-4"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="form3Example1c12"
                          className="form-control borde"
                          placeholder="Nombre"
                          {...register("nombre", { required: true })}
                        />
                        {errors.nombre?.type === "required" && (
                          <p className="text-danger mx-auto">
                            El campo Nombre es requerido
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          id="form3Example3c12"
                          className="form-control borde"
                          placeholder="E-mail"
                          {...register("correo", {
                            required: true,
                            pattern:
                              /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                          })}
                        />
                        {errors.correo?.type === "required" && (
                          <p className="text-danger mx-auto">
                            El campo Email es requerido
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4c12"
                          className="form-control borde"
                          placeholder="Contraseña"
                          {...register("password", {
                            required: true,
                            minLength: 8,
                          })}
                        />
                        {errors.password?.type === "required" && (
                          <p className="text-danger mx-auto">
                            Ingresa una contraseña
                          </p>
                        )}
                        {errors.password?.type === "minLength" && (
                          <p className="text-danger mx-auto">
                            La contraseña debe tener un mínimo de 8 caracteres
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2 borde"
                        type="checkbox"
                        id="form2Example3c12"
                        {...register("aceptarterminos")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example32"
                      >
                        Confirmo y acepto los
                        <Link to="/terms"> Términos y condiciones</Link>
                      </label>
                    </div>
                    {activarRegistro && (
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <input
                          type="submit"
                          className="btn btn-dark w-50 boton"
                          value="Registrar"
                        />
                      </div>
                    )}
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center text-center order-1 order-lg-2">
                  <img src={REG1} className="img-fluid" alt="Sample image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
