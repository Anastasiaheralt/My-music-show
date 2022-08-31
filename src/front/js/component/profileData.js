import React, {useContext} from 'react';
import "./register.css";
import { Context } from "../store/appContext";

export const ProfileData = () => {
  const { store } = useContext(Context);
  return (
    <div className="container d-flex fuente2">
      <div className="col-6 ">
        <form>
          <fieldset disabled>
            <legend>Datos personales</legend>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Nombres
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control borde"
                placeholder={store.user.name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Correo electronico
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control borde"
                placeholder={store.user.email}
              />
            </div>
            <div className="mb-3 row">
              <label htmlFor="disabledTextInput" className="form-label">
                Contraseña
              </label>
              <>
              <button type="button" className="btn btn-primary btn-sm">Cambiar Contraseña</button>
              </>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="col-6 m-3 p-3">
        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action active"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Evento contatado</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">Boda real</p>
            <small>Fotografía Studio.</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Evento contratado</h5>
              <small className="text-muted">21 days ago</small>
            </div>
            <p className="mb-1">Grduación Medicina ULA.</p>
            <small className="text-muted">Dj Ann.</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Evento contratado</h5>
              <small className="text-muted">1 month ago</small>
            </div>
            <p className="mb-1">Inauguración centro comercial</p>
            <small className="text-muted">Catering snacks.</small>
          </a>
        </div>
      </div>
    </div>
  );
};
