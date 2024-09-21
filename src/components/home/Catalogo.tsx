import React from "react";
import { FaRegFilePdf } from "react-icons/fa";

export default function Catalogo() {
  return (
    <section
      className="mb-10 flex h-[500px] items-center justify-end"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/bgCatalogo.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex h-72 w-11/12 flex-col items-center justify-center gap-5 rounded-xl bg-blue-comfisa/75 text-white md:h-1/2 lg:mr-20 lg:w-1/2">
        <h3 className="text-xl font-bold">Descubre Nuestro Catálogo</h3>
        <p className="w-4/5 text-white">
          Explora nuestra selección de herramientas, equipos y suministros
          esenciales para cualquier proyecto. Descarga el catálogo completo para
          conocer todos los detalles y ofertas.
        </p>

        <a
          href="/"
          download="catalogo-comfisa.pdf"
          className="btnDescargar relative flex cursor-pointer items-center gap-1.5 rounded-md bg-white px-5 py-2 font-bold text-blue-comfisa transition-all before:absolute before:left-0 before:h-full before:w-full before:rounded-md before:bg-orange-comfisa hover:text-white [&>span]:z-10 [&>svg]:z-10"
        >
          <FaRegFilePdf />
          <span>Descargar Catálogo</span>
        </a>
      </div>
    </section>
  );
}
