import Image from "next/image";

const Gallery = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 pt-8">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-full md:w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            {/* 1 */}
            <Image
              alt="gallery"
              src="https://i.ibb.co/nRLxKPc/IMG-9205.jpg"
              width={400}
              height={400}
              className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            {/* 2 */}
            <Image
              alt="gallery"
              src="https://i.ibb.co/pdJdyTP/IMG-9909.jpg"
              width={400}
              height={200}
              className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            {/* 3 */}
            <Image
              alt="gallery"
              src="https://i.ibb.co/qJr6vCc/IMG-9964.jpg"
              width={800}
              height={400}
              className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
        <div className="flex w-full md:w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            {/* 4 */}
            <Image
              alt="gallery"
              src="https://i.ibb.co/vHnrDbK/IMG-0035.jpg"
              width={800}
              height={800}
              //   className="block h-full w-full rounded-lg object-cover object-center hover:"
              className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            {/* 5 */}
            <Image
              alt="gallery"
              src="https://i.ibb.co/p08pGtb/IMG-9437.jpg"
              width={400}
              height={400}
              className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            {/* 6 */}
            <Image
              alt="gallery"
              src="https://i.ibb.co/2YqdZVY/IMG-7322.jpg"
              width={400}
              height={400}
              className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
