import { Navbar } from "../../../../shared/navbar";
import { Sidebar } from "../../../../shared/sidebar";
import { Contenido } from "./contenido";

export const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="row m-0" style={{ height: "calc(100vh - 62px)" }}>
        <Sidebar></Sidebar>
        <div className="col-10" style={{ border: "2px solid blue" }}>
          <Contenido></Contenido>
        </div>
      </div>
    </>
  );
};
