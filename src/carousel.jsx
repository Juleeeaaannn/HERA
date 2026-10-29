import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Perfil from './assets/perfil.jpg'
// Datos de ejemplo mapeados con tu estructura exacta
const CARDS_DATA = [
  {
    id: 1,
    author: "Marianela Chavez",
    profileImg: Perfil,
    bgColor: "bg-[#c9d58b]",
    title: "Llamar a las partes del cuerpo por su nombre no le quita inocencia a la infancia, la protege",
    desc: "Frente a los tabúes culturales que persisten en la provincia, la psicóloga infantil Celeste Sánchez advierte que el uso de eufemismos dificulta las denuncias por vulneración de derechos. La utilización de la anatomía correcta facilita el relato en la Justicia y fortalece la ESI desde los primeros años de vida.",
  },
  {
    id: 2,
    author: "Marianela Chavez",
    profileImg: Perfil,
    bgColor: "bg-wine",
    title: "La mujer que acaba de parir necesita contención psicológica y rehabilitación física para superar la cuarentena",
    desc: "Una mirada médica y neurobiológica desmiente la idea tradicional del posparto, y advierte sobre la necesidad de acompañamiento integral de mujer que acaba de dar a luz. El especialista Federico Antequeda plantea cómo se trabaja en este nuevo paradigma.",
  },
];

export default function BiDirectionalStackedCarousel() {
  const [cards, setCards] = useState(CARDS_DATA);
  const [direction, setDirection] = useState(0); // 1 = Siguiente, -1 = Anterior

  const handleNext = () => {
    setDirection(1);
    setCards((prevCards) => {
      const [first, ...rest] = prevCards;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setDirection(-1);
    setCards((prevCards) => {
      const last = prevCards[prevCards.length - 1];
      const rest = prevCards.slice(0, prevCards.length - 1);
      return [last, ...rest];
    });
  };

  // Variantes para controlar la dirección física de las tarjetas en base a 60vw
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "25vw" : "-25vw", 
      scale: 0.9,
      opacity: 0,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? "-70vw" : "70vw",
      scale: 0.9,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center relative ">
      
      {/* Contenedor del Área del Carrusel (Calculado con margen para los bordes asomados) */}
      <div className="relative w-[95vw] h-[35vw] flex items-center justify-center">
        
        {/* BORDE ASOMADO IZQUIERDO (Simula la tarjeta previa) */}
        <div className="absolute w-[60vw] h-full rounded-4xl bg-white/5 border border-white/10 -translate-x-[6vw] scale-[0.93] opacity-30 pointer-events-none z-0 overflow-hidden">
          <div className="w-full h-full bg-slate-800/40 backdrop-blur-sm" />
        </div>

        {/* BORDE ASOMADO DERECHO (Simula la tarjeta siguiente) */}
        <div className="absolute w-[60vw] h-full rounded-4xl bg-white/5 border border-white/10 translate-x-[6vw] scale-[0.93] opacity-30 pointer-events-none z-0 overflow-hidden">
          <div className="w-full h-full bg-slate-800/40 backdrop-blur-sm" />
        </div>

        {/* TARJETA CENTRAL ACTIVA CON ANIMACIÓN */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={cards[0].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 26,
            }}
            className="absolute w-[60vw] h-full rounded-4xl contain-content shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] z-10 select-none"
          >
            {/* Imagen comentada / Fondo Dinámico */}
            {/* <img src={Nota1} alt='nota 1 imagen' className='flex object-cover h-full w-full absolute z-10'/> */}
            <div className={`flex w-full h-full ${cards[0].bgColor} shadow-2xl/30`} />
            
            {/* Bloque de Información Inferior */}
            <div className="bg-white flex flex-col absolute z-20 backdrop-blur-xl bottom-0 gap-10 h-90 pt-10 w-full">
              <div className="flex gap-2 place-items-center-mb-6 mx-6">
                <img 
                  src={cards[0].profileImg} 
                  alt={cards[0].author} 
                  className="size-10 rounded-[99999px] object-cover border border-white/20 shadow-md"
                />
                <h2 className="text-[#6c0820] text-2xl font-medium">{cards[0].author}</h2>
              </div>
              
              <h1 className="text-[#6c0820] font-bold text-4xl pl-5 pr-5 leading-snug">
                {cards[0].title}
              </h1>
              
              <p className="text-[#6c0820] mx-4 h-40 my-4 overflow-hidden -mt-8 text-ellipsis line-clamp-3 p-4 rounded-xl bg-black/10 text-2xl leading-relaxed">
                {cards[0].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Botones de Navegación de Flujo */}
      <div className="absolute  w-full flex gap-6 mt-8 z-30">
        <button
          onClick={handlePrev}
          className="absolute left-60 top-0 scale-200 px-3 py-2 rounded-[99999px] bg-[#fe9bb8] text-[#6c0820] font-medium  transition hover:scale-250 duration-500 cursor-pointer shadow-2xl/30"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="absolute right-60 top-0 scale-200 px-3 py-2 rounded-[99999px] bg-[#fe9bb8] text-[#6c0820] font-medium  transition hover:scale-250 duration-500 cursor-pointer shadow-2xl/30"
        >
          →
        </button>
      </div>

    </div>
  );
}
