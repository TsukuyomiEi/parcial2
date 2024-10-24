import { Route, Routes } from "react-router-dom";

import { Acerca } from "../../componentes/otros/Acerca";
import { MenuCrear } from "../../componentes/contenedor/menu/MenuCrear";
import { MenuAdmin } from "../../componentes/contenedor/menu/MenuAdmin";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { MenuListar } from "../../componentes/contenedor/menu/MenuListar";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { MenuActualizar } from "../../componentes/contenedor/menu/MenuActualizar";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      
      <Route path="/mencre" element={<MenuCrear/>}/>

      <Route path="/menlis" element={<MenuListar />} />
      <Route path="/menadmin" element={<MenuAdmin />} />
      <Route path="/menactu/:codigo" element={<MenuActualizar />} />

      <Route path="/menuacer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
