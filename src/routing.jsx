import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Main as FichaPersonal } from "./components/trabajadores/personal/fichaPersonal/main";
import { Main as ControlAsistencia } from "./components/trabajadores/personal/controlAsistencia/main";
import { Main as AdelantoAsistencia } from "./components/trabajadores/personal/adelantoAsistencia/main";

export const Routing = () => {
  return (
    <Routes>
      <Route
        path="/trabajadores/:campo/:pagina"
        element={<Component></Component>}
      ></Route>
    </Routes>
  );
};

const Component = () => {
  const { campo, pagina } = useParams();

  switch (campo) {
    case "personal":
      switch (pagina) {
        case "fichaPersonal":
          return <FichaPersonal></FichaPersonal>;
        case "controlAsistencia":
          return <ControlAsistencia></ControlAsistencia>;
        case "adelantoAsistecia":
          return <AdelantoAsistencia></AdelantoAsistencia>;
        default:
          return "<h1>no encontrada</h1>";
      }
    case "tablas":
      switch (pagina) {
        case "sede":
          return "<h1>dsad</h1>";
      }
  }
};
