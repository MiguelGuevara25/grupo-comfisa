"use client";
import FormContact from "@/components/contacto/FormContact";
import dynamic from "next/dynamic";

const MapLocals = dynamic(() => import("@/components/contacto/MapLocals"), {
  ssr: false,
});

export default function ContactoPage() {
  return (
    <section className="mx-auto w-4/5 xl:max-w-screen-xl">
      <h2 className="mb-10 text-center text-3xl font-bold uppercase">
        Nuestros Locales
      </h2>
      <div className="flex">
        <FormContact />
        <MapLocals />
      </div>
    </section>
  );
}
