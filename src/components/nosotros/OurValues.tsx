import { ourValues } from "@/data";
import React from "react";

export default function OurValues() {
  return (
    <section className="mx-auto mb-10 w-4/5 xl:max-w-screen-xl">
      <h2 className="mb-10 text-center text-3xl font-bold uppercase">
        Nuestros Valores
      </h2>

      <div className="flex flex-col flex-wrap items-center justify-center gap-5 text-white md:flex-row lg:gap-x-10 xl:gap-20 [&>div>svg]:text-6xl [&>div>svg]:lg:text-8xl [&>div]:flex [&>div]:w-40 [&>div]:flex-col [&>div]:items-center [&>div]:space-y-2 [&>div]:rounded-lg [&>div]:bg-blue-comfisa [&>div]:p-4 [&>div]:font-bold [&>div]:shadow-md">
        {ourValues.map(({ id, icon, title }) => (
          <div key={id}>
            {React.createElement(icon)}
            <p>{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}