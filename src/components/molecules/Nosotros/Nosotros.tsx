import Image from "next/image";

export default function Nosotros() {
  return (
    <div className="relative w-4/5 md:w-2/5  mx-auto pb-16">
      <Image
        className="h-full w-full object-cover rounded-md"
        src="https://i.ibb.co/vXNxtKW/OIG-2y-9y-Tiej-C-7-Eqkg-Iy.jpg"
        alt="Random image"
        width={1000}
        height={1000}
      />
    </div>
  );
}
