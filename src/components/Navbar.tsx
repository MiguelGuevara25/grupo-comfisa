import Link from "next/link";

export default function Navbar() {
  const links = [
    { id: 1, href: "/", label: "Inicio" },
    { id: 2, href: "/nosotros", label: "Nosotros" },
    { id: 3, href: "/donde-comprar", label: "Donde comprar" },
    { id: 4, href: "/contacto", label: "Contáctanos" },
  ];

  return (
    <nav className="mx-auto flex max-w-screen-xl items-center justify-between py-5">
      <div className="w-40">
        <img src="/logoComfisa.png" alt="" />
      </div>

      <ul className="flex gap-10">
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
        <button className="rounded-md border border-orange-comfisa bg-orange-comfisa px-5 py-2 text-white transition-all hover:border hover:border-orange-comfisa hover:bg-white hover:text-orange-comfisa">
          Chatea con nosotros
        </button>
      </div>
    </nav>
  );
}
