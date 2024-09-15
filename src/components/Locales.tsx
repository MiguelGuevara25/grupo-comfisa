import { FaPhone, FaMapPin, FaClock } from "react-icons/fa6";

export default function Locales() {
  const locales = [
    {
      id: 1,
      nombre: "Comercializadora de Fierro SAC",
      img: "comfisaPrincipal.png",
      direccion:
        "Urb. Villa Verde IV etapa Mz. A lote 18 Pachacamac - Lima - Lima",
      numeros: "952680900 / (01)758-9635",
      horarios: "L-V: 7:30 am - 17:30 pm S: 7:30 am - 14:00 pm",
    },
    {
      id: 2,
      nombre: "Comercializadora Hanna SAC",
      img: "comercializadoraHanna.png",
      direccion:
        "Mz. J Lote 18 sec. 3 Grupo Residencial 21 Lima - Villa el Salvador",
      numeros: "922730720 / (01)6413127",
      horarios: "L-V: 7:30 am - 17:30 pm S: 7:30 am - 14:00 pm",
    },
    {
      id: 3,
      nombre: "Almacén Paul Poblet",
      img: "paulPobletAlmacen.png",
      direccion:
        "Paul Poblet Lind Mz. A lote 9 Urb. Huertos de Lurin - Pachacamac - Lima - Lima",
      numeros: "964869923 / 972022177",
      horarios: "L-V: 7:30 am - 17:30 pm S: 7:30 am - 14:00 pm",
    },
    {
      id: 4,
      nombre: "Steel House Valery SAC",
      img: "steelHouseValery.png",
      direccion:
        "Mz. C lote 13 A. V Asociacion de Vivienda la Ponderosa - Pucusana",
      numeros: "955224456 / 949999525",
      horarios: "L-V: 7:30 am - 17:30 pm S: 7:30 am - 14:00 pm",
    },
    {
      id: 5,
      nombre: "Proyectos e Inversiones Flavi SAC",
      img: "proyectosFlavi.png",
      direccion: "Av. Manuel Valle 33, Lima 15823",
      numeros: "964869923 / 972022177 / 994045254",
      horarios: "L-V: 7:30 am - 17:30 pm S: 7:30 am - 14:00 pm",
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="mb-10 text-center text-3xl font-bold uppercase">
        Nuestros Locales
      </h2>

      <div className="mx-auto flex w-11/12 flex-wrap justify-center gap-10">
        {locales.map((local) => (
          <div
            className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:bg-orange-comfisa hover:text-white sm:w-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 [&>div>img]:transition-all [&>div>img]:duration-700 [&>div>img]:hover:scale-125"
            key={local.id}
          >
            <div className="overflow-hidden border">
              <img src={`/${local.img}`} alt={local.nombre} />
            </div>

            <div className="m-10 space-y-3 [&>p>svg]:text-lg [&>p]:flex [&>p]:items-center [&>p]:gap-2">
              <h3 className="text-center text-lg">{local.nombre}</h3>
              <p className="">
                <FaMapPin />
                <span className="">{local.direccion}</span>
              </p>
              <p>
                <FaPhone /> <span>{local.numeros}</span>
              </p>
              <p>
                <FaClock />
                <span>{local.horarios}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
