import { links } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaXmark } from "react-icons/fa6";

type ModalNavbarProps = {
  handleCloseNavbarModal: () => void;
  isClosing: boolean;
};

export default function ModalNavbar({
  handleCloseNavbarModal,
  isClosing,
}: ModalNavbarProps) {
  return (
    <section
      className={`animate__animated ${isClosing ? "animate__fadeOut" : "animate__fadeIn"} fixed inset-0 bg-black/50`}
    >
      <div
        className={`${isClosing ? "animate__fadeOutRight" : "animate__fadeInRight"} animate__animated fixed right-0 top-0 flex h-full w-4/5 flex-col items-center justify-center gap-10 bg-white`}
      >
        <div className="absolute -left-3 top-10 w-max rounded-s-lg bg-blue-comfisa p-1 text-4xl text-white">
          <FaXmark onClick={handleCloseNavbarModal} />
        </div>

        <div>
          <a href="/">
            <Image
              width={110}
              height={110}
              src="/icoComfisa.png"
              alt="Grupo Comfisa Sac"
              onClick={handleCloseNavbarModal}
            />
          </a>
        </div>

        <ul className="flex flex-col gap-10 text-center">
          {links.map(({ id, href, label }) => (
            <li key={id}>
              <Link
                className="text-xl transition-colors hover:text-orange-comfisa"
                href={href}
                onClick={handleCloseNavbarModal}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-8 text-white [&>li]:cursor-pointer [&>li]:rounded-full [&>li]:bg-orange-comfisa [&>li]:p-1.5 [&>li]:text-2xl">
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
    </section>
  );
}
