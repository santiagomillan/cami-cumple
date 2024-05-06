import HeroSection from "app/components/organisms/HeroSection/HeroSection";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <HeroSection />
      <div>Hola Mundo</div>
    </main>
  );
}
