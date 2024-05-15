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
      content:
        '"Excelente servicio: 5000 estrellas. Es una persona íntegra, muy muy leal y una excelente hermana. En todos estos años que he podido compartir con ella he visto un crecimiento y una evolución tan hermosa que te hace querer cada parte. Muy admirable su valentía y manera de afrontar cada situación. Servicio recomendadísimo si buscas una compañía para toda la vida y sobretodo una cómplice que te siga las estupideces sin miedo al ridículo. Se hace querer muy fácil y ese cariño perdura por años. Opinión personal: Me has hecho cambiar mi perspectiva de las cosas y de ser como persona de una forma tan positiva y linda, que para mí eso es lo que me queda y quedará para siempre en mi corazón hasta mi último momento. Agradezco infinitamente tu existencia, cada que llegas a la vida de alguien (como a la mia) le das un giro de 180 grados y la vida es mucho más divertida. Gracias por estar a mi lado."',
    },
    {
      photo:
        "https://i.ibb.co/JdFtxjc/423194562-24868004129479847-3788539217048371714-n.jpg",
      name: "Andrea",
      content:
        '"Milis Maria, feliz pumpleeee. Eres una de las pocas cosas nindas que tiene TP. Eres un solecito, te he cogido mucho cariño a pesar de conocerte hace tan poco. Tienes una forma de ser bien bonis, toa extrovertida y divertida, pero también bien tiernísima así te quieras hacer la bad bitch jajdjajaj, siempre quieres ayudar a las personas y te preocupas por los demás jeje toa beia. Tqms Milis. Espero que podamos vernos para celebrar jiji."',
    },
  ],
  [
    {
      photo: "https://i.ibb.co/37sr1Cj/file.jpg",
      name: "Tio Scott",
      content: `"${"What do I say about my niece at her 25th birthday?  I guess all I can really say is that I'm sorry I've only gotten the last few years of her being my beautiful, smart niece. I wish I could say I've been your Tio your whole life. One thing I know for sure, I couldn't love you more if I'd been there from the day you were born. I hope your next 25 years are even better than the first 25 and I'm happy I'll be around for them.  With all my love....Your Tio."}"`,
    },
    {
      photo:
        "https://i.ibb.co/2krQzxB/438173113-10231505373048102-8037714969294419649-n.jpg",
      name: "Tia Johanna",
      content:
        '"Mi preciosa niña. No se en que momento te nos creciste tan rápido. Aún recuerdo aquellos días con Chachito y Mateo jugando a hacer magias y a jugar en las piscinas en Mariquita. Hoy, no podría estar más orgullosa de la mujer hermosa y especial en la que te has convertido. Te amo con toda mi alma y sabes que siempre estoy aquí para ti. Tu tía que te ama con la vida! 😘😘😘"',
    },
    {
      photo: "https://i.ibb.co/R6PdpBd/file.jpg",
      name: "Dianita",
      content:
        '"Un día como hoy mi vida cambió para siempre y no podría haber sido mejor. Hoy no solamente voy a celebrar tu vida, también hoy quiero agradecerte, por ser mi apoyo, por estar ahí, por ser mi amiga,   mi sitio seguro. Me siento orgullosa todos los días de mi vida de ver la mujer en la que te has convertido, tan madura, honesta, con principios, que se preocupa siempre por hacer feliz primero a sus seres queridos. Por último, feliz feliz cumpleaños al amor de mi vida, a mi amiga, la que con un abrazo me sana el alma.  Te bendigo con toda bendición, no solo hoy sino todos los días de tu vida. Te amo ciela hermosa."',
    },
  ],
  [
    {
      photo: "https://i.ibb.co/d7gYMzT/IMG-20210508-154223.jpg",
      name: "Suegro",
      content: `"Camila; en los momentos actuales se requieren de personas con un alto valor moral, de una responsabilidad a toda prueba, con calidad humana, comprometida con sigo misma y para con los demás.
      Sí es mujer es mucho más destacado porque la, sociedad las necesita debemos tratar de reconstruir el tejido social, pero reconocer el valor que tienen personas como tú
      Sabes que te admiro por todas tus habilidades y desarrollo personal.
      Espero sigas disfrutando de tus éxitos laborales y en unión de tu muy linda familia."`,
    },
    {
      photo:
        "https://i.ibb.co/2krQzxB/438173113-10231505373048102-8037714969294419649-n.jpg",
      name: "Tia Johanna",
      content:
        '"Mi preciosa niña. No se en que momento te nos creciste tan rápido. Aún recuerdo aquellos días con Chachito y Mateo jugando a hacer magias y a jugar en las piscinas en Mariquita. Hoy, no podría estar más orgullosa de la mujer hermosa y especial en la que te has convertido. Te amo con toda mi alma y sabes que siempre estoy aquí para ti. Tu tía que te ama con la vida! 😘😘😘"',
    },
    {
      photo: "https://i.ibb.co/R6PdpBd/file.jpg",
      name: "Dianita",
      content:
        '"Un día como hoy mi vida cambió para siempre y no podría haber sido mejor. Hoy no solamente voy a celebrar tu vida, también hoy quiero agradecerte, por ser mi apoyo, por estar ahí, por ser mi amiga,   mi sitio seguro. Me siento orgullosa todos los días de mi vida de ver la mujer en la que te has convertido, tan madura, honesta, con principios, que se preocupa siempre por hacer feliz primero a sus seres queridos. Por último, feliz feliz cumpleaños al amor de mi vida, a mi amiga, la que con un abrazo me sana el alma.  Te bendigo con toda bendición, no solo hoy sino todos los días de tu vida. Te amo ciela hermosa."',
    },
  ],
];

const TestimonialItem = ({ item }: any) => {
  const { content, photo, name } = item;
  return (
    // <div className=" shadow-xl rounded-xl hover:-translate-y-1 h-full duration-300 p-6 bg-slate-700">
    //   <div className="mt-4">
    //     <p className=" mb-6 leading-loose">{content}</p>
    //     <div className="flex items-center">
    //       <div className="mr-2">
    //         <Image
    //           src={photo}
    //           alt={name}
    //           className="max-w-full h-full rounded-full border"
    //           width={50}
    //           height={50}
    //         />
    //       </div>
    //       <div>
    //         <h5 className="text-xl font-bold">{name}</h5>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="shadow-xl rounded-xl hover:-translate-y-1 h-full duration-300 p-6 bg-slate-700">
      <div className="mt-4">
        <p className="mb-6 leading-loose">{content}</p>
        <div className="flex items-center">
          <div className="mr-2">
            <Image
              src={photo}
              alt={name}
              className="max-w-full h-full rounded-full border"
              width={50}
              height={50}
              objectFit="cover"
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
    <section className="ezy__testimonial20 light py-14  text-white md:w-4/5 w-11/12">
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
                className="text-lg  shadow-xl bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full mr-4"
                onClick={() => handleControl("prev")}
              >
                <FaAngleLeft />
              </button>
              <button
                className="text-lg  shadow-xl bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
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
