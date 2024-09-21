import { infoMisionVision } from "@/data";

export default function MisionVision() {
  return (
    <section className="mx-auto mb-16 w-4/5 xl:max-w-screen-xl">
      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
        <div className="basis-3/5 overflow-hidden rounded-lg xl:basis-2/3">
          <img src="/photoMisionVision.jpg" alt="Foto de misión y visión" />
        </div>

        <div className="flex basis-2/5 flex-col gap-5 xl:basis-1/3">
          {infoMisionVision.map(({ title, description }) => (
            <div key={title} className="basis-1/2 space-y-3">
              <h3 className="w-max rounded-lg bg-orange-comfisa px-10 py-1 text-center text-xl font-bold uppercase text-white lg:text-3xl">
                {title}
              </h3>
              <p className="text-pretty">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
