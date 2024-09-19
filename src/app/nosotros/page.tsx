export default function NosotrosPage() {
  return (
    <div className="mb-10 flex flex-col items-center lg:flex-row">
      <div className="animate__fadeInLeft animate__animated lg:basis-3/5">
        <img src="/photoAboutUs.jpg" alt="Foto sobre nosotros" />
      </div>

      <div className="animate__fadeInRight animate__animated mx-auto -mt-10 w-4/5 space-y-5 rounded-md bg-blue-comfisa p-10 text-white lg:-ml-20 lg:basis-2/5 lg:px-12 lg:py-8 xl:-ml-40 xl:p-16">
        <h2 className="text-2xl font-bold uppercase xl:text-4xl">
          Quiénes Somos
        </h2>

        <p className="text-pretty text-sm xl:text-base">
          En COMFISA, somos una empresa familiar con más de 8 años de
          experiencia en la construcción. Ofrecemos productos y servicios de
          calidad, respaldados por marcas líderes como Aceros Arequipa y Cemento
          Inka. Como distribuidores autorizados, garantizamos los mejores
          precios para mayoristas y minoristas. Nuestro compromiso es brindar
          soluciones excepcionales y liderar en el mercado, siempre enfocados en
          la satisfacción del cliente.
        </p>
      </div>
    </div>
  );
}
