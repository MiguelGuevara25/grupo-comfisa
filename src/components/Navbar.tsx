import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function Navbar() {
  const links = [
    { id: 1, href: "/", label: "Inicio" },
    { id: 2, href: "/nosotros", label: "Nosotros" },
    { id: 3, href: "/donde-comprar", label: "Donde comprar" },
    { id: 4, href: "/contacto", label: "Contáctanos" },
  ];

  return (
    <nav className="mx-auto flex max-w-screen-xl flex-col items-center justify-between py-5 lg:flex-row">
      <div className="w-40">
        <img src="/logoComfisa.png" alt="Logo de Comfisa" />
      </div>

      <ul className="flex flex-col gap-10 lg:flex-row">
        {links.map(({ id, href, label }) => (
          <li key={id}>
            <Link
              className="transition-colors hover:text-orange-comfisa"
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <a
          href="https://wa.me/+51994045254"
          target="_blank"
          className="animate__animated animate__headShake animate__infinite flex items-center gap-1.5 rounded-md border border-orange-comfisa bg-orange-comfisa px-5 py-2 text-white transition-all hover:border hover:border-orange-comfisa hover:bg-white hover:text-orange-comfisa"
        >
          <FaWhatsapp className="text-xl" />

          <span>Chatea con nosotros</span>
        </a>
      </div>
    </nav>
  );
}
