import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";

export default function Toobar() {
  return (
    <div className="bg-blue-comfisa py-2 text-white [&>div>div+div>div>svg]:text-orange-comfisa [&>div>div>svg]:text-orange-comfisa">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between lg:flex-row">
        <div className="flex items-center gap-1.5">
          <FaEnvelope />
          <p>ventas@comfisa.com</p>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-1.5">
            <FaPhone />
            <p>+51 994045254</p>
          </div>

          <div className="flex items-center gap-1.5">
            <GiRotaryPhone className="text-2xl" />
            <p>(01) 758-9635</p>
          </div>
        </div>

        <ul className="flex items-center gap-8 [&>li]:cursor-pointer [&>li]:rounded-full [&>li]:bg-orange-comfisa [&>li]:p-1.5 [&>li]:text-lg">
          <li>
            <FaInstagram />
          </li>

          <li>
            <FaFacebookF />
          </li>

          <li>
            <FaTiktok />
          </li>
        </ul>
      </div>
    </div>
  );
}
