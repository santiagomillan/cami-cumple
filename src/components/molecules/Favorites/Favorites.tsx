import Image from "next/image";

export default function Favorites() {
  return (
    <section className="w-full md:w-4/5 pb-10">
      <div className="py-4 px-2 sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <Image
                src="https://i.ibb.co/xG0xsYr/IMG-0157.jpg"
                alt=""
                width={400}
                height={400}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 right-0 p-4 xs:text-xl md:text-3xl">
                Jack & Boo
              </h3>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 ">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              <Image
                src="https://i.ibb.co/8KXsz67/IMG-0069.png"
                alt=""
                width={400}
                height={400}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Stitch
              </h3>
            </div>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 ">
                <Image
                  src="https://i.ibb.co/25PvrxJ/imagenes-alicia-pais-maravillas-g.jpg"
                  alt=""
                  width={400}
                  height={400}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Alicia
                </h3>
              </div>
              <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <Image
                  src="https://i.ibb.co/qFmQg57/IMG-20220109-161627.jpg"
                  alt=""
                  width={400}
                  height={400}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Comida
                </h3>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <Image
                src="https://i.ibb.co/xSCSjSp/Whats-App-Image-2024-05-06-at-6-43-58-PM.jpg"
                alt="Whats-App-Image-2024-05-06-at-6-43-58-PM"
                width={400}
                height={400}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Familia
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
