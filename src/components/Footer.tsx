export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="rounded-t-xl bg-blue-comfisa text-white">
      <div>
        <div className="mx-auto max-w-screen-xl">
          <div>
            <h3>Nuestros locales:</h3>
            <ul>
              <li>AV. HUERTOS DE PACHACAMAC MZ. B - LIMA - LIMA - LURIN</li>
              <li>AV. CARRIZALES LOTE. A - LIMA - CAÑETE - IMPERIAL</li>
              <li>
                CAR. PANAMERICANA SUR LA PODEROSA LOTE. 12 MZ. C - LIMA - LIMA -
                PUCUSANA
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-950">
          <div className="mx-auto flex max-w-screen-xl justify-between">
            <p>© Grupo Comfisa Sac - Todos los derechos reservados {anio}</p>
            <p>Startup / Desarrollo Web - Encode.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
