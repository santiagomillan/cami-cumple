// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <Image src="/Images/wonderland.jpg" width={1900} height={600} alt="fondo" />
//   );
// }
"use client";
import styles from "./EndSection.module.css";
import confetti from "canvas-confetti";

export default function EndSection() {
  return (
    // <div className={styles.heroSection}>
    //   <div className={styles.overlay}></div>{" "}
    //   <div className={styles.content}>
    //     <div className="my-40">
    //       <h1 className="text-6xl">Bienvenida Camila a Wonderland</h1>
    //       <div className="mt-10">
    //         <button onClick={() => confetti()} className="bg-red-500 px-8 py-4">
    //           gift
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className={`${styles.heroSection} h-screen flex items-center`}>
      {/* <div className={styles.overlay}></div>{" "} */}
      <div className={`${styles.content} flex justify-center w-full`}>
        <div>
          {/* <h1 className="text-6xl">Bienvenida Camila a Wonderland</h1> */}
          <div className="-mt-40">
            <button
              onClick={() => confetti()}
              className="bg-gray-800 px-8 py-4"
            >
              🎉 Feliz Cumpleaños 🎉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
