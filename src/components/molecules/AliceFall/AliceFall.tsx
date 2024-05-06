// "use client";
// // import Image from "next/image";

// // import styles from "./AliceFall.module.css";

// // export const AliceFall = () => {
// //   return (
// //     <div className={styles["parallax-container"]}>
// //       <div className={`${styles.image} ${styles.image_background}`}>
// //         <Image src="https://i.ibb.co/x7dMNxS/Background-1.png" alt="" />
// //       </div>
// //       <div className={`${styles.image} ${styles.image_middle}`}>
// //         <Image src="https://i.ibb.co/R3sbhx0/Middle.png" alt="" />
// //       </div>
// //       <div className={`${styles.image} ${styles.image_foreground}`}>
// //         <Image src="https://i.ibb.co/02hKVWF/Foreground.png" alt="" />
// //       </div>
// //     </div>
// //   );
// // };
// import Image from "next/image";
// import styles from "./AliceFall.module.css";

// export const AliceFall = () => {
//   //   return (
//   //     <div className={`${styles.parallax_container} `}>
//   //       <div
//   //         className={`${styles.image} ${styles.image_background} h-screen flex items-center`}
//   //       >
//   //         <Image
//   //           src="https://i.ibb.co/x7dMNxS/Background-1.png"
//   //           alt=""
//   //           layout="fill"
//   //           objectFit="cover"
//   //         />
//   //       </div>

//   //       {/* <div className={`${styles.image} ${styles.image_middle}`}>
//   //         <Image
//   //           src="https://i.ibb.co/R3sbhx0/Middle.png"
//   //           alt=""
//   //           layout="fill"
//   //           objectFit="cover"
//   //         />
//   //       </div>

//   //       <div className={`${styles.image} ${styles.image_foreground}`}>
//   //         <Image
//   //           src="https://i.ibb.co/02hKVWF/Foreground.png"
//   //           alt=""
//   //           layout="fill"
//   //           objectFit="cover"
//   //         />
//   //       </div> */}
//   //     </div>
//   //   );
//   return (
//     <div className={styles.parallax_container}>
//       <div className={`${styles.image} ${styles.image_background} `}>
//         <Image
//           src="https://i.ibb.co/x7dMNxS/Background-1.png"
//           alt=""
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import styles from "./AliceFall.module.css";

// const ParallaxSection = () => {
//   return (
//     <div className={styles.parallax_container}>
//       <div className={styles.image_background}>
//         <img src="https://i.ibb.co/x7dMNxS/Background-1.png" alt="" />
//       </div>
//       <div className={styles.image_middle}>
//         <img src="https://i.ibb.co/R3sbhx0/Middle.png" alt="" />
//       </div>
//       <div className={styles.image_foreground}>
//         <img src="https://i.ibb.co/02hKVWF/Foreground.png" alt="" />
//       </div>
//     </div>
//   );
// };

// export default ParallaxSection;
import Image from "next/image";

const ParallaxSection = () => {
  return (
    <div className="relative h-screen overflow-x-hidden overflow-y-scroll perspective-8">
      <div className="absolute inset-0 m-auto h-full">
        <div className="absolute inset-0 m-auto h-full transform translate-z-0 scale-100">
          <Image
            src="https://i.ibb.co/x7dMNxS/Background-1.png"
            alt=""
            width={800}
            height={600}
            layout="responsive"
          />
        </div>
        <div className="absolute inset-0 m-auto h-full transform translate-z-2 scale-75">
          <Image
            src="https://i.ibb.co/R3sbhx0/Middle.png"
            alt=""
            width={800}
            height={600}
            layout="responsive"
          />
        </div>
        <div className="absolute inset-0 m-auto h-full transform translate-z-5 scale-37.5">
          <Image
            src="https://i.ibb.co/02hKVWF/Foreground.png"
            alt=""
            width={800}
            height={600}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
