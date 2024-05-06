// "use client";
// import React from "react";
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";
// import Image from "next/image";

// const ParallaxSection = () => {
//   return (
//     <ParallaxProvider>
//       <div className="relative h-screen overflow-x-hidden overflow-y-scroll perspective-8">
//         <div className=" m-auto h-full">
//           <div className=" inset-0 m-auto h-full transform translate-z-0 scale-100">
//             <Image
//               src="https://i.ibb.co/x7dMNxS/Background-1.png"
//               alt=""
//               width={800}
//               height={600}
//               layout="responsive"
//             />
//           </div>
//           <Parallax translateY={[-20, 10]}>
//             <div className="absolute inset-0 m-auto h-full transform translate-z-2 scale-75">
//               <Image
//                 src="https://i.ibb.co/R3sbhx0/Middle.png"
//                 alt=""
//                 width={800}
//                 height={600}
//                 layout="responsive"
//               />
//             </div>
//           </Parallax>
//           <Parallax translateY={[-30, 20]}>
//             <div className="absolute inset-0 m-auto h-full transform translate-z-5 scale-37.5">
//               <Image
//                 src="https://i.ibb.co/02hKVWF/Foreground.png"
//                 alt=""
//                 width={800}
//                 height={600}
//                 layout="responsive"
//               />
//             </div>
//           </Parallax>
//         </div>
//       </div>
//     </ParallaxProvider>
//   );
// };

// export default ParallaxSection;

"use client";
// import React from "react";
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";
// import Image from "next/image";

// const ParallaxSection = () => {
//   return (
//     <ParallaxProvider>
//       <div className="relative h-screen">
//         <Parallax translateY={[-20, 20]}>
//           <Image
//             src="https://i.ibb.co/x7dMNxS/Background-1.png"
//             alt=""
//             width={800}
//             height={600}
//             layout="responsive"
//           />
//         </Parallax>
//         <Parallax translateY={[-30, 30]}>
//           <Image
//             src="https://i.ibb.co/R3sbhx0/Middle.png"
//             alt=""
//             width={800}
//             height={600}
//             layout="responsive"
//           />
//         </Parallax>
//         <Parallax translateY={[-40, 40]}>
//           <Image
//             src="https://i.ibb.co/02hKVWF/Foreground.png"
//             alt=""
//             width={800}
//             height={600}
//             layout="responsive"
//           />
//         </Parallax>
//       </div>
//     </ParallaxProvider>
//   );
// };

// export default ParallaxSection;

// import React from "react";
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";
// import Image from "next/image";

// const ParallaxSection = () => {
//   return (
//     <ParallaxProvider>
//       <div className="relative h-screen overflow-hidden">
//         <Parallax className="absolute top-0" translateY={[-20, 20]}>
//           <Image
//             src="https://i.ibb.co/x7dMNxS/Background-1.png"
//             alt=""
//             width={1000}
//             height={600}
//             layout="responsive"
//           />
//         </Parallax>
//         <Parallax className=" top-0" translateY={[-30, 30]}>
//           <Image
//             src="https://i.ibb.co/R3sbhx0/Middle.png"
//             alt=""
//             width={1000}
//             height={600}
//             layout="responsive"
//           />
//         </Parallax>
//         <Parallax className="absolute top-0" translateY={[-40, 40]}>
//           <Image
//             src="https://i.ibb.co/02hKVWF/Foreground.png"
//             alt=""
//             width={1000}
//             height={600}
//             layout="responsive"
//           />
//         </Parallax>
//       </div>
//     </ParallaxProvider>
//   );
// };

// export default ParallaxSection;
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
//TODO ajustar que se vea al 100% en mobile
const ParallaxSection = () => {
  return (
    <div className=" my-12 mb-20">
      <ParallaxProvider>
        <div className="relative  overflow-hidden mt-20">
          <Parallax className=" top-0" translateY={[-10, 10]}>
            <Image
              src="https://i.ibb.co/x7dMNxS/Background-1.png"
              alt=""
              width={1000}
              height={2000}
              layout="responsive"
            />
          </Parallax>
          <Parallax className="absolute top-0" translateY={[-30, 30]}>
            <Image
              src="https://i.ibb.co/R3sbhx0/Middle.png"
              alt=""
              width={1000}
              height={600}
              layout="responsive"
            />
          </Parallax>
          <Parallax className="absolute top-0" translateY={[-40, 40]}>
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
