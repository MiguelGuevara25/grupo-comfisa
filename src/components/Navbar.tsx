"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa6";
import ModalNavbar from "./ModalNavbar";
import { links } from "@/data";

export default function Navbar() {
  const [navbarModal, setNavbarModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (navbarModal) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [navbarModal]);

  const handleOpenNavbarModal = () => {
    setNavbarModal(true);
    setIsClosing(false);
  };

  const handleCloseNavbarModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setNavbarModal(false);
    }, 500);
  };

  return (
    <nav className="mx-auto flex w-11/12 items-center justify-between py-5 xl:max-w-screen-xl">
      <div className="w-40">
        <a href="/">
          <img src="/logoComfisa.png" alt="Logo de Comfisa" />
        </a>
      </div>

      <div className="lg:hidden">
        <CgMenuMotion
          className="text-4xl text-orange-comfisa"
          onClick={handleOpenNavbarModal}
        />
      </div>

      {navbarModal && (
        <ModalNavbar
          handleCloseNavbarModal={handleCloseNavbarModal}
          isClosing={isClosing}
        />
      )}

      <ul className="hidden flex-col gap-10 lg:flex lg:flex-row">
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

      <div className="hidden lg:block">
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
