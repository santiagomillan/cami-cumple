import AliceFall from "app/components/molecules/AliceFall/AliceFall";
import { DateCounter } from "app/components/molecules/DateCounter/DateCounter";
import Gallery from "app/components/molecules/Gallery/Gallery";
import HeroSection from "app/components/organisms/HeroSection/HeroSection";

import Image from "next/image";

export default function Home() {
  ///https://ibb.co/VjZ8r7J
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <HeroSection />
      {/* <div>Hola Mundo</div>
      <Image
        src={"https://i.ibb.co/2YqdZVY/IMG-7322.jpg"}
        alt=""
        width={100}
        height={100}
      /> */}

      <div className="text-5xl font-extrabold text-center pt-10">
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Feliz Cumpleaños
        </div>
        <div>Amor</div>
      </div>
      <Gallery />
      <DateCounter />
      <h1>alice</h1>
      <AliceFall />
    </main>
  );
}
