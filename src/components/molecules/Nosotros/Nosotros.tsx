import Image from "next/image";

export default function Nosotros() {
  return (
    <section className=" overflow-hidden w-4/5 ">
      <div className=" px-8 my-32 md:my-20  h-svh md:h-80 flex flex-col justify-center">
        <div className="flex flex-col sm:flex-row mx-auto">
          <div>
            <Image
              src="https://i.ibb.co/vXNxtKW/OIG-2y-9y-Tiej-C-7-Eqkg-Iy.jpg"
              className=" rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 hover:z-30 h-full w-full object-cover hover:scale-110 transform origin-bottom "
              alt="#_"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co/1ZF1np5/IMG-20230406-175238.jpg"
              className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-110 transform origin-bottom"
              alt="#_"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co/Hd4g9qT/IMG-20220801-213035.jpg"
              className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-110 transform origin-bottom"
              alt="#_"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co/1ZnC64t/IMG-20220727-212637.jpg"
              className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-110 transform origin-bottom"
              alt="#_"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
{
  /*<div className="relative w-4/5 md:w-2/5  mx-auto pb-16"> 
      <Image
        className="h-full w-full object-cover rounded-md"
        src="https://i.ibb.co/vXNxtKW/OIG-2y-9y-Tiej-C-7-Eqkg-Iy.jpg"
        alt="Random image"
        width={1000}
        height={1000}
      /> */
}

// import Image from "next/image";

// export default function Nosotros() {
//   return (
//     <section className=" overflow-hidden w-4/5 ">
//       <div className=" px-8 sm:my-32 md:my-0 h-svh md:h-80 flex flex-col justify-center">
//         <div className="flex flex-col sm:flex-row mx-auto">
//           <img
//             src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             className="z-10 rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-110 transform origin-bottom"
//             alt="#_"
//           />
//           <img
//             src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
//             className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-110 hover:z-50 transform origin-bottom"
//             alt="#_"
//           />

//           <img
//             src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-110 transform origin-bottom"
//             alt="#_"
//           />

//           <img
//             src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-110 transform origin-bottom"
//             alt="#_"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
