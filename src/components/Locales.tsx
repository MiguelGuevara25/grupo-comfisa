import { locales } from "@/data";
import { FaPhone, FaMapPin, FaClock } from "react-icons/fa6";

export default function Locales() {
  return (
    <section className="mb-10">
      <h2 className="mb-10 text-center text-3xl font-bold uppercase">
        Nuestros Locales
      </h2>

      <div className="mx-auto flex w-11/12 flex-wrap justify-center gap-10">
        {locales.map(({ id, nombre, direccion, horarios, img, numeros }) => (
          <div
            className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:bg-orange-comfisa hover:text-white sm:w-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 [&>div>img]:transition-all [&>div>img]:duration-700 [&>div>img]:hover:scale-125"
            key={id}
          >
            <div className="overflow-hidden border">
              <img src={`/${img}`} alt={nombre} />
            </div>

            <div className="mx-10 mb-10 mt-5 space-y-3 [&>p>svg]:text-lg [&>p>svg]:text-blue-comfisa [&>p]:flex [&>p]:items-center [&>p]:gap-2">
              <h3 className="text-center text-lg font-bold">{nombre}</h3>
              <p>
                <FaMapPin />
                <span>{direccion}</span>
              </p>

              <p>
                <FaPhone />
                <span>{numeros}</span>
              </p>

              <p>
                <FaClock />
                <span>{horarios}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
