"use client";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import PropTypes from "prop-types";
import Image from "next/image";

const testimonialList = [
  [
    {
      photo:
        "https://i.ibb.co/Jqwj7X1/7bf678d1-cb6d-4339-870b-a97abd19cbdf.jpg",
      name: "Nicolas",
      content:
        '"Roseeee 🖤👑 Aprovecho la ocasión para desearte un feliz feliz cumpleaños, quiero que sepas que eres una parte muy importante en mi vida y que para mí lo que más me interesa es tu felicidad. Eres una gran persona y una mujer exitosa, estoy seguro que vas a seguir logrando cosas impresionantes en tu vida, estare acompañándote en todos esos momentos, siempre daré todo para brindarte mi apoyo en todas las formas que sea posible."',
    },
    {
      photo:
        "https://i.ibb.co/HgRBS7v/ff914eb6-61a6-433a-b0d2-f9d044132195.jpg",
      name: "Rocha",
      rating: 5,
      content:
        '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
    },
    {
      photo:
        "https://i.ibb.co/JdFtxjc/423194562-24868004129479847-3788539217048371714-n.jpg",
      name: "Andrea",
      rating: 3.5,
      content:
        '"Milis Maria, feliz pumpleeee. Eres una de las pocas cosas nindas que tiene TP. Eres un solecito, te he cogido mucho cariño a pesar de conocerte hace tan poco. Tienes una forma de ser bien bonis, toa extrovertida y divertida, pero también bien tiernísima así te quieras hacer la bad bitch jajdjajaj, siempre quieres ayudar a las personas y te preocupas por los demás jeje toa beia. Tqms Milis. Espero que podamos vernos para celebrar jiji."',
    },
  ],
  [
    {
      photo: "https://i.ibb.co/37sr1Cj/file.jpg",
      name: "Tio Scott",
      rating: 4.5,
      content:
        '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
    },
    {
      photo: "https://i.ibb.co/qJr6vCc/IMG-9964.jpg",
      name: "Raima Sen",
      rating: 5,
      content:
        '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
    },
    {
      photo: "https://i.ibb.co/pdJdyTP/IMG-9909.jpg",
      name: "Akshay Kumar",
      rating: 3.5,
      content:
        '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
    },
  ],
];

const TestimonialItem = ({ item }: any) => {
  const { content, photo, name } = item;
  return (
    <div className=" shadow-xl rounded-xl hover:-translate-y-1 h-full duration-300 p-6 bg-slate-700">
      <div className="mt-4">
        <p className="opacity-50 mb-6 leading-loose">{content}</p>
        <div className="flex items-center">
          <div className="mr-2">
            <Image
              src={photo}
              alt={name}
              className="max-w-full h-auto rounded-full border"
              width={50}
              height={50}
            />
          </div>
          <div>
            <h5 className="text-xl font-bold">{name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
TestimonialItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Testimonial20 = () => {
  const [index, setIndex] = useState(0);

  const handleControl = (type: any) => {
    if (type === "prev") {
      setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
    } else if (type === "next") {
      setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
    }
  };
  return (
    <section className="ezy__testimonial20 light py-14 md:py-24 text-white w-11/12">
      <div className="container relative">
        <div className="flex justify-between mb-md-4">
          <div className="w-2/3 lg:max-w-lg">
            <h2 className="font-bold text-3xl md:text-[45px] leading-none mb-6">
              Que es lo que los demas tienen que decir
            </h2>
            <p className="text-lg leading-relaxed">
              Algunas personas se tomaron el tiempo de dedicarte estas palabras.
              Eres muy especial para todos nosotros.
            </p>
          </div>
          <div className="w-1/3">
            <div className="flex justify-end items-center relative h-full">
              <button
                className="text-lg bg-white shadow-xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full mr-4"
                onClick={() => handleControl("prev")}
              >
                <FaAngleLeft />
              </button>
              <button
                className="text-lg bg-white shadow-xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
                onClick={() => handleControl("next")}
              >
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-y-6 md:gap-x-6 mt-12 ">
          {testimonialList[index].map((item, i) => (
            <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
              <TestimonialItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonial20;
