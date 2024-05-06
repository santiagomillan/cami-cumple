import ParallaxSection from "app/components/molecules/AliceFall/AliceFall";
import AliceFall from "app/components/molecules/AliceFall/AliceFall";
import { DateCounter } from "app/components/molecules/DateCounter/DateCounter";
import Favorites from "app/components/molecules/Favorites/Favorites";
import Gallery from "app/components/molecules/Gallery/Gallery";
import Testimonials from "app/components/molecules/Testimonials/Testimonials";
import HeroSection from "app/components/organisms/HeroSection/HeroSection";

import Image from "next/image";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  ///https://ibb.co/VjZ8r7J
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <HeroSection />

      <div className="text-5xl md:text-8xl font-extrabold text-center pt-10 w-5/6 md:w-full">
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Feliz Cumpleaños
        </div>
        <div>Amor</div>
      </div>
      <Gallery />
      <DateCounter />

      {/* <ParallaxSection /> */}
      <div className="relative w-full lg:w-auto m-auto">
        <ParallaxSection />
      </div>

      <div className="text-5xl  font-extrabold text-center pb-10">
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Tus Favoritos
        </div>
      </div>

      <Favorites />

      <div className="text-5xl font-extrabold text-center pb-5">
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Testimonios
        </div>
      </div>

      <Testimonials />
    </main>
  );
}
