export const Contenido = () => {
  return (
    <>
      {/* <!-- ----------- --> */}
      <div className="d-flex justify-content-between py-2 border-bottom border-2">
        <h2 className="text-danger">CONTROL DE ASISTENCIA</h2>
        <button
          className="btn text-white rounded-0 px-4"
          style={{ background: "#5c1260" }}
        >
          Periodo
        </button>
      </div>

      {/* <!-- ------------------- --> */}
      <div className="ps-3" style={{ height: "height: calc(100% - 62px)" }}>
        <button className="mt-2 px-1" style={{ border: "1px solid #c6c7c7" }}>
          <img
            src="{{ url_for('static', filename='img/plus.svg') }}"
            width="40px"
            className="m-0"
          />
          <span>Guardar</span>
        </button>

        {/* <!-- ---------------------------- --> */}
        <div className="my-3">
          <div className="row">
            <label className="col-auto col-form-label" htmlFor="">
              Periodo:
            </label>
            <div className="col-2">
              <select className="form-select" name="" id="">
                <option value="1">Julio</option>
              </select>
            </div>
            <label className="col-auto col-form-label" htmlFor="">
              Año activo:
            </label>
            <button className="col-1">2017</button>
            <label className="col-auto col-form-label" htmlFor="">
              Categoria Ocupacional:
            </label>
            <div className="col-2">
              <select className="form-select" name="" id="">
                <option value="1">Empleado</option>
              </select>
            </div>
            <label className="col-auto col-form-label" htmlFor="">
              Periodisidad:
            </label>
            <div className="col-2">
              <select className="form-select" name="" id="">
                <option value="1">Mensual</option>
              </select>
            </div>
          </div>
        </div>

        {/* <!-- ---------------------------------- --> */}
        <div className="row gx-5 px-4">
          <div className="col-4 ps-1">
            {/* <!-- 1 --> */}
            <div className="" style={{ position: "relative" }}>
              <span
                style={{
                  position: "relative",
                  top: "12px",
                  background: "#eaedee",
                }}
              >
                Rango Fechas
              </span>
              <div className="row align-items-center border boder-2 py-2">
                <label className="col-auto col-form-label" htmlFor="">
                  Inicio:
                </label>
                <div className="col-3">
                  <select className="form-select form-select-sm form-select"></select>
                </div>
                <label className="col-auto col-form-label" htmlFor="">
                  Fin:
                </label>
                <div className="col-3">
                  <select className="form-select form-select-sm"></select>
                </div>
                <button
                  className="col-auto btn btn-sm text-white rounded-0 px-4"
                  style={{ background: "#5c1260" }}
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>

          {/* <!-- 2 --> */}
          <div className="col-4 d-flex align-items-end">
            <div className="row align-items-center border boder-2 pt-2 pb-2">
              <label className="col-auto col-form-label" htmlFor="">
                Dias Trabajando:
              </label>
              <div className="col-5">
                <input type="text" className="form-control form-control-sm" />
              </div>

              <button
                className="col-auto btn btn-sm text-white rounded-0 px-4"
                style={{ background: "#5c1260" }}
              >
                Aplicar
              </button>
            </div>
          </div>

          <div className="col-4 d-flex align-items-end">
            <div className="row align-items-center pt-2 pb-2">
              <button
                className="col-auto btn text-white rounded-0 px-4 py-2"
                style={{ background: "#5c1260" }}
              >
                Importar marcaciones
              </button>
            </div>
          </div>
        </div>

        {/* <!-- -------------------------------------- --> */}
        <div className="mt-3 rounded-1 overflow-hidden border border-2">
          <div
            style={{ height: "50px", width: "100%", background: "#bdbdbe" }}
          ></div>

          <table className="table table-bordered table-sm w-100 m-0">
            <thead>
              <tr>
                <td colSpan="4">Datos Basicos</td>
                <td colSpan="6">Control de Asistencia</td>
                <td colSpan="3">Horas Extras</td>
              </tr>
              <tr>
                <td>Codigo</td>
                <td>Apellidos y Nombres</td>
                <td>Basico</td>
                <td>Dias L.</td>
                <td>Dias T.</td>
                <td>Faltas</td>
                <td>H. Permisos</td>
                <td>M. Permisos</td>
                <td>M. Tardanza</td>
                <td>H. Trabajadas</td>
                <td>H.E. 25%</td>
                <td>H.E. 35%</td>
                <td>H.E. 0%</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>.</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
};
