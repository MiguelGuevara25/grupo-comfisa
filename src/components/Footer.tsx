import { directions } from "@/data";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapPin,
  FaPhone,
  FaTiktok,
} from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="rounded-t-3xl bg-white">
      <div className="mx-auto flex w-4/5 flex-col flex-wrap justify-between gap-10 py-10 md:flex-row md:items-start xl:max-w-screen-xl [&>div>div>p>svg]:text-blue-comfisa [&>div>h3]:mb-2 [&>div>h3]:font-bold">
        <div>
          <Image
            className="mx-auto"
            width={110}
            height={110}
            src="/icoComfisa.png"
            alt="Grupo Comfisa Sac"
          />
        </div>

        <div>
          <h3>Síguenos en:</h3>
          <div className="flex gap-3 text-2xl text-blue-comfisa">
            <a href="/" target="_blank">
              <FaInstagram />
            </a>
            <a href="/" target="_blank">
              <FaFacebookF />
            </a>
            <a href="/" target="_blank">
              <FaTiktok />
            </a>
          </div>
        </div>

        <div>
          <h3>Contáctanos:</h3>
          <div className="space-y-2 [&>p]:flex [&>p]:items-center [&>p]:gap-2">
            <p>
              <FaEnvelope />
              <a href="mailto:ventas@comfisa.com">ventas@comfisa.com</a>
            </p>

            <p>
              <FaPhone />
              <a href="tel:+51994045254">+51 994045254</a>
            </p>

            <p>
              <GiRotaryPhone className="text-xl" />
              <a href="tel:+517589635">(01) 758-9635</a>
            </p>
          </div>
        </div>

        <div>
          <h3>Ubícanos en:</h3>
          <div>
            {directions.map(({ id, address }) => (
              <p key={id} className="flex items-center gap-2">
                <FaMapPin />
                <span>{address}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-950 text-white">
        <div className="mx-auto flex w-4/5 flex-col justify-between text-center lg:flex-row xl:max-w-screen-xl">
          <p>© Grupo Comfisa Sac - Todos los derechos reservados {anio}</p>
          <p>Startup | Desarrollo Web - Encode.com</p>
        </div>
      </div>
    </footer>
  );
}
