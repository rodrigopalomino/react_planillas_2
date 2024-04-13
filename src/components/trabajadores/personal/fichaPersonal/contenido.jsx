export const Contenido = () => {
  return (
    <>
      <div className="d-flex justify-content-between py-2 border-bottom border-2">
        <h2 className="text-danger">FICHA PERSONAL</h2>
        <button
          className="btn text-white rounded-0 px-4"
          style={{ background: "#5c1260" }}
        >
          Periodo
        </button>
      </div>

      {/* <!-- ------------------- --> */}
      <div className="row" style={{ height: "calc(100% - 62px)" }}>
        {/* <!-- ---------------------- --> */}
        <div
          className="col-3 p-0"
          style={{ border: "2px solid rgb(209,198,198)" }}
        >
          <div
            style={{ width: "100%", height: "50px", background: "#e0e2e6" }}
          ></div>

          {/* <!-- tabla 1 --> */}
          <table className="table table-sm table-bordered">
            <thead>
              <tr className="table-secondary">
                <td></td>
                <td>Nombre / Apellido</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>HERNANDEZ LEDESMA, CARLO AUGUSTO</td>
              </tr>
              <tr>
                <td></td>
                <td>HERNANDEZ LEDESMA, CARLO AUGUSTO</td>
              </tr>
              <tr>
                <td></td>
                <td>HERNANDEZ LEDESMA, CARLO AUGUSTO</td>
              </tr>
              <tr>
                <td></td>
                <td>HERNANDEZ LEDESMA, CARLO AUGUSTO</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- ------------------------------ --> */}
        <div className="col-9">
          {/* <!-- botones --> */}
          <div className="mt-2">
            <button className="p-0 px-1" style={{ border: "none" }}>
              <img
                src="{{ url_htmlFor('static', filename='img/plus.svg') }}"
                width="40px"
                className="m-0"
              />
              <span>Agregar</span>
            </button>
            <button className="p-0 px-1" style={{ border: "none" }}>
              <img
                src="{{ url_htmlFor('static', filename='img/plus.svg') }}"
                width="40px"
                className="m-0"
              />
              <span>Guardar</span>
            </button>
            <button className="p-0 px-1" style={{ border: "none" }}>
              <img
                src="{{ url_htmlFor('static', filename='img/trash.svg') }}"
                width="40px"
                className="p-1"
              />
              <span>Elimiar</span>
            </button>
          </div>

          {/* <!-- navegacion --> */}
          <div className="mt-2">
            <ul className="pagination">
              <li className="page-item">
                <a href="" className="page-link">
                  ...::: Datos Generales :::...
                </a>
              </li>
              <li className="page-item">
                <a href="" className="page-link">
                  ...::: Datos Laborales :::...
                </a>
              </li>
              <li className="page-item">
                <a href="" className="page-link">
                  ...::: Contratos :::...
                </a>
              </li>
              <li className="page-item">
                <a href="" className="page-link">
                  ...::: Lugar de Trabajo + Horarios :::...
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- htmlFormulario --> */}
          <form className="container row">
            <div className="col-8">
              {/* <!-- fila 1 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Usuario:
                </label>
                <div className="col-3">
                  <input type="text" className="form-control" id="usuario" />
                </div>
                <div className="col-auto">
                  <button
                    className="btn text-white rounded-0 px-4"
                    style={{ background: "#5c1260" }}
                  >
                    Buscar en RENIEC
                  </button>
                </div>
              </div>

              {/* <!-- fila 2 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Nombres:
                </label>
                <div className="col-5">
                  <input type="text" className="form-control" id="usuario" />
                </div>
                <label htmlFor="usuario" className="col-3 col-form-label">
                  Fecha nacimiento:
                </label>
                <div className="col-2">
                  <select className="form-select" name="" id="">
                    <option value="1">value1</option>
                    <option value="2">value2</option>
                    <option value="3">value3</option>
                  </select>
                </div>
              </div>

              {/* <!-- fila 3 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Ap. Paterno:
                </label>
                <div className="col-4">
                  <input type="text" className="form-control" id="usuario" />
                </div>
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Ap. Materno
                </label>
                <div className="col-4">
                  <input type="text" className="form-control" id="usuario" />
                </div>
              </div>

              {/* <!-- fila 4 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Direccion:
                </label>
                <div className="col-10">
                  <input type="text" className="form-control" id="usuario" />
                </div>
              </div>

              {/* <!-- fila 5 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Domiciliado:
                </label>
                <div className="col-3">
                  <select className="form-select">
                    <option value="1">DOMICILIADO</option>
                  </select>
                </div>
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Estado Civil:
                </label>
                <div className="col-3">
                  <select className="form-select">
                    <option value="1">CASADO</option>
                    <option value="1">SOLTERO</option>
                    <option value="1">VIUDO</option>
                  </select>
                </div>
              </div>

              {/* <!-- fila 6 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Tipo de via:
                </label>
                <div className="col-3">
                  <select className="form-select">
                    <option value="1">DOMICILIADO</option>
                  </select>
                </div>

                <label htmlFor="usuario" className="col-1 col-form-label">
                  Numero:
                </label>
                <div className="col-2">
                  <input type="text" className="form-control" id="usuario" />
                </div>
                <label htmlFor="usuario" className="col-1 col-form-label">
                  Interior:
                </label>
                <div className="col-2">
                  <input type="text" className="form-control" id="usuario" />
                </div>
              </div>

              {/* <!-- fila 7 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label pe-0">
                  Nombre de via:
                </label>
                <div className="col-10">
                  <input type="text" className="form-control" id="usuario" />
                </div>
              </div>

              {/* <!-- fila 8 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Tipo de Zona:
                </label>
                <div className="col-4">
                  <select className="form-select">
                    <option value="1">URB: URBANIZACION</option>
                  </select>
                </div>
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Email:
                </label>
                <div className="col-4">
                  <input type="text" className="form-control" id="usuario" />
                </div>
              </div>

              {/* <!-- fila 9 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Nmb de Zona:
                </label>
                <div className="col-10">
                  <input type="text" className="form-control" id="usuario" />
                </div>
              </div>

              {/* <!-- fila 10 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Referenecia:
                </label>
                <div className="col-10">
                  <input type="text" className="form-control" id="usuario" />
                </div>
              </div>

              {/* <!-- fila 11 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Pais:
                </label>
                <div className="col-4">
                  <select className="form-select">
                    <option value="1">PERU</option>
                  </select>
                </div>
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Departamento:
                </label>
                <div className="col-4">
                  <select className="form-select">
                    <option value="1">DEPARTAMENTO AMAZONAS</option>
                  </select>
                </div>
              </div>

              {/* <!-- fila 12 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Provincia:
                </label>
                <div className="col-4">
                  <select className="form-select">
                    <option value="1"></option>
                  </select>
                </div>
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Distrito:
                </label>
                <div className="col-4">
                  <select className="form-select">
                    <option value="1"></option>
                  </select>
                </div>
              </div>

              {/* <!-- fila 13 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Nacionalidad:
                </label>
                <div className="col-4">
                  <select className="form-select">
                    <option value="1">BOUVET ISLAND</option>
                  </select>
                </div>
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Genero:
                </label>
                <div className="col-4">
                  <select className="form-select">
                    <option value="1">MASCULINO</option>
                  </select>
                </div>
              </div>

              {/* <!-- fila 14 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Celular:
                </label>
                <div className="col-4">
                  <input type="text" className="form-control" id="usuario" />
                </div>
                <label htmlFor="usuario" className="col-2 col-form-label">
                  RUC
                </label>
                <div className="col-4">
                  <input type="text" className="form-control" id="usuario" />
                </div>
              </div>

              {/* <!-- fila 15 --> */}
              <div className="row mb-1">
                <label htmlFor="usuario" className="col-2 col-form-label">
                  Telefono:
                </label>
                <div className="col-3">
                  <input type="text" className="form-control" id="usuario" />
                </div>
                <label htmlFor="usuario" className="col-3 col-form-label">
                  Nivel Educativo:
                </label>
                <div className="col-4">
                  <select className="form-select">
                    <option value="1">SIN EDUCACION htmlForMAL</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-4">
              <p className="text-center text-danger fw-bold">
                Tamaño de la imagen 267 x 319
              </p>
              <div
                className="border border-3 rounded-2 bg-white d-flex align-items-center"
                style={{ height: "80%" }}
              >
                <p className="h1 text-center">IMAGEN NO DISPONIBLE</p>
              </div>
              <p className="m-0">Rutas :</p>

              <div className="row">
                <div className="col-8">
                  <input type="text" className="form-control" />
                </div>
                <button
                  className="btn text-white rounded-0 px-4 col-3"
                  style={{ background: "#5c1260" }}
                ></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
