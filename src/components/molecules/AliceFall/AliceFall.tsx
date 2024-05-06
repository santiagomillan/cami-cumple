"use client";

// import React from "react";
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";
// import Image from "next/image";
// //TODO ajustar que se vea al 100% en mobile
// const ParallaxSection = () => {
//   return (
//     <div className=" my-12 mb-20">
//       <ParallaxProvider>
//         <div className="relative  overflow-hidden mt-20">
//           <Parallax className=" top-0" translateY={[-10, 10]}>
//             <Image
//               src="https://i.ibb.co/x7dMNxS/Background-1.png"
//               alt=""
//               width={1000}
//               height={3000}
//               layout="responsive"
//             />
//           </Parallax>
//           <Parallax className="absolute top-0" translateY={[-30, 30]}>
//             <Image
//               src="https://i.ibb.co/R3sbhx0/Middle.png"
//               alt=""
//               width={1000}
//               height={600}
//               layout="responsive"
//             />
//           </Parallax>
//           <Parallax className="absolute top-0" translateY={[-40, 40]}>
//             <Image
//               src="https://i.ibb.co/02hKVWF/Foreground.png"
//               alt=""
//               width={1000}
//               height={600}
//               layout="responsive"
//             />
//           </Parallax>
//         </div>
//       </ParallaxProvider>
//     </div>
//   );
// };

// export default ParallaxSection;
"use client";

// import React from "react";
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";
// import Image from "next/image";
// //TODO ajustar que se vea al 100% en mobile
// const ParallaxSection = () => {
//   return (
//     <div className=" my-12 mb-20">
//       <ParallaxProvider>
//         <div className="relative  overflow-hidden mt-20">
//           <Parallax className=" top-0" translateY={[-10, 10]}>
//             <Image
//               src="https://i.ibb.co/x7dMNxS/Background-1.png"
//               alt=""
//               width={1000}
//               height={6000}
//               layout="responsive"
//             />
//           </Parallax>
//           <Parallax className="absolute top-0" translateY={[-30, 30]}>
//             <Image
//               src="https://i.ibb.co/R3sbhx0/Middle.png"
//               alt=""
//               width={1000}
//               height={600}
//               layout="responsive"
//             />
//           </Parallax>
//           <Parallax className="absolute top-0" translateY={[-40, 40]}>
//             <Image
//               src="https://i.ibb.co/02hKVWF/Foreground.png"
//               alt=""
//               width={1000}
//               height={600}
//               layout="responsive"
//             />
//           </Parallax>
//         </div>
//       </ParallaxProvider>
//     </div>
//   );
// };

// export default ParallaxSection;
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";

const ParallaxSection = () => {
  return (
    <div className="my-10 mb-20">
      <ParallaxProvider>
        <div className="relative overflow-hidden ">
          <Parallax className="top-0 block sm:hidden " translateY={[-10, 10]}>
            <Image
              src="https://i.ibb.co/x7dMNxS/Background-1.png"
              alt=""
              width={1000}
              height={6000} // Doble de alto para móviles
              layout="responsive"
            />
          </Parallax>
          <Parallax className="top-0 hidden sm:block" translateY={[-10, 10]}>
            <Image
              src="https://i.ibb.co/x7dMNxS/Background-1.png"
              alt=""
              width={1000}
              height={6000} // Altura normal para escritorio
              layout="responsive"
            />
          </Parallax>
          <Parallax className="absolute top-0 z-50" translateY={[-40, 40]}>
            <Image
              src="https://i.ibb.co/R3sbhx0/Middle.png"
              alt=""
              width={1000}
              height={600}
              layout="responsive"
            />
          </Parallax>
          <Parallax className="absolute top-0 " translateY={[-30, 20]}>
            <Image
              src="https://i.ibb.co/02hKVWF/Foreground.png"
              alt=""
              width={1000}
              height={600}
              layout="responsive"
            />
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
};

export default ParallaxSection;
