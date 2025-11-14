"use client";
import Link from "next/link";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from 'react';


type Hito = {
  id: number;
  title: string;
  description: string;
};

const timelineData: Hito[] = [
  {
    id: 1,
    title: 'Perseverancia y Adaptabilidad',
    description: 'Ambas habilidades fueron esenciales para mi supervivencia académica y personal ya que formaron a la persona que quiere demostrar su enorme potencial en las áreas de derecho y tecnología',
  },
  {
    id: 2,
    title: 'Programación y Trabajo en Equipo',
    description: 'La programación durante 3 años fue parte de la oportunidad que se brindo desde 2023, esto fue importante para mi crecimiento tecnológico y colaborativo fue necesario desaprender y aprender mis hábitos, a ser paciente y tolerante con los demás',
  },
  {
    id: 3,
    title: 'Conocimiento en Office 365, inglés y empatía',
    description: 'En sintonía con apps de Microsoft, y también certificada en inglés',
  },
  {
    id: 4,
    title: 'Lectura comprensiva y oratoria',
    description: 'Participaciones tales como ser defensora de mi proyecto de Expo 2024 como también para mi educación general siendo parte de actividades recreativas como debates, defensas de tesis entre otros',
  },

  {
    id: 5,
    title: 'Manejo del escenario y persuación ',
    description: 'Me considero una persona con habilidades en comunicación y tener objeivos claros son necesarios para estar delante de muchas personas y defender mis puntos de vista sin ningún miedo a ser juzgada',
  },
];


const Timeline: React.FC = () => {
  return (
    <section id="historia" className="py-16 text-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mis Habilidades y Valores⚖️🎙️
        </h2>

        <div className="relative border-l-4 border-fuchsia-950 pl-6 ml-4">

          {timelineData.map((hito) => (
            <div key={hito.id} className="mb-10">

              {/* Círculo del Hito (Punto en la línea) */}
              <div className="absolute w-5 h-5 bg-fuchsia-950 rounded-full mt-1.5 -left-3"></div>

              {/* Contenido de la Tarjeta (Con efecto hover) */}
              <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] border-l-4 border-fuchsia-950">
                <time className="text-sm font-semibold text-fuchsia-950">{hito.year}</time>
                <h3 className="text-xl font-bold mt-1 mb-2">{hito.title}</h3>
                <p className="text-gray-600">{hito.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Carrusel de educación
const carouselImages = [
  { id: "1", src: "/img/logo_hilasal.jpg", title: "¡Supérate! Hilasal (2023-2025)" },
  { id: "2", src: "/img/logo_sanjose.png", title: "CECE San José (2023-2024)" },
  { id: "3", src: "/img/logo_kodigo.jpg", title: "Kodigo (2025)" },
];

// Galeria de imagenes de proyectos
const galleryImages = [
  { id: "1", src: "/img/Whispering_books.jpg", title: "Podcast de libros", href: "https://open.spotify.com/show/5d68zkHGvr9xl7uiFZrzDY?si=1PNUTCsdQIq1rQJaEg7_Ow" },
  { id: "2", src: "/img/leafdream.png", title: "LeafDream", href: "https://github.com/Kathy-Jim/LeafDream.github.io.git" },
  { id: "3", src: "/img/Finacc.png", title: "Finacc", href: "https://github.com/Kathy-Jim/Finacc.github.io.git" },
];

const logrosImages = [
  { id: "1", src: "/img/CSP.png", title: "CSP 2025", href: "#" },
  { id: "2", src: "/img/perfomance.jpg", title: "Entrega de notas S1", href: "#" },
  { id: "3", src: "/img/expo.jpg", title: "Expo 2024", href: "#" },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 15 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
  });

  // Controladores del pequeño carrusel
  const handlePrev = () => instanceRef.current?.prev();
  const handleNext = () => instanceRef.current?.next();

  return (
    <>
      {/* Creación del header de mi portafolio */}

      <header className="bg-fuchsia-950 text-white mb-16">
        <div className="container mx-auto flex justify-between items-center p-4 sm:p-6 lg:p-10">
          <span className="text-xl font-semibold">Katherine Jimenez⚖️📚</span>
          <div className="flex space-x-4">

            <div>
              <a
                href='https://www.linkedin.com/in/katherine-jimenez-b9754a367/'
                target="_blank"
                rel="noopener noreferrer">

                <Image
                  src={"/img/Image/logo_lin.png"}
                  width={35}
                  height={35} // CORRECCIÓN: Ajuste de la altura para evitar distorsión
                  alt={"LinkedIn Logo"}
                />
              </a>
            </div>

            <div>
              <a href='https://github.com/Kathy-Jim' target="_blank" rel="noopener noreferrer">
                <Image
                  src={"/img/Image/logo_github.png"}
                  width={35}
                  height={35} // CORRECCIÓN: Ajuste de la altura para evitar distorsión
                  alt="GitHub Logo"
                />
              </a>
            </div>

            <Link href="https://www.linkedin.com/in/katherine-jimenez-b9754a367/details/certifications/" passHref>
              <span className="bg-white text-black py-2 px-4 rounded-lg font-bold cursor-pointer inline-block">
                Certificaciones
              </span>
            </Link>
          </div>
        </div>
      </header>


      <div
        className="bg-fuchsia-300 bg-cover bg-center w-full min-h-screen flex items-end justify-left p-9"
        style={{ backgroundImage: "url('/img/back_ground.jpg')" }}
      >
        <div
          className="bg-black/70 text-white p-4 rounded-xl font-normal text-xl"
        >
          <strong>Katherine Jimenez</strong>
          <br />
          <span>Futura Abogada con master en criminología, bases</span>
          <br />
          <span>en el uso de Office 365, inglés y programación</span>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* ESTA ES LA NUEVA SECCIÓN DE "SOBRE MÍ" (TIMELINE)  */}
      {/* -------------------------------------------------- */}
      <Timeline />


      <section className="bg-cover bg-center container mx-auto p-9">
        <h2 className="text-black text-3xl text-center font-bold mb-8">Educación</h2>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider overflow-hidden">
            {carouselImages.map((img) => (
              <div
                key={img.id}
                className="keen-slider__slide flex justify-center p-2"
              >
                <div className="flex flex-col items-center p-4 border rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02] bg-white/50">
                  <Image
                    src={img.src}
                    alt={img.title}
                    width={250}
                    height={150}

                    className="rounded-lg object-contain h-36 w-auto"
                  />
                  <p className="mt-4 text-center font-semibold text-gray-800">{img.title}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-fuchsia-950/70 hover:bg-fuchsia-950 text-white p-2 rounded-full shadow-lg transition duration-300 z-10 hidden md:block"
            aria-label="Anterior"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-fuchsia-950/70 hover:bg-fuchsia-950 text-white p-2 rounded-full shadow-lg transition duration-300 z-10 hidden md:block"
            aria-label="Siguiente"
          >
            ▶
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {instanceRef.current &&
              [...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-colors duration-1000 ${currentSlide === idx ? 'bg-fuchsia-950' : 'bg-fuchsia-400 hover:bg-fuchsia-500'
                    }`}
                  aria-label={`Ir a la diapositiva ${idx + 2}`}
                />
              ))
            }
          </div>
        </div>
      </section>

      <section className="bg-cover bg-center container mx-auto p-9">
        <h2 className="text-black text-3xl text-center font-bold mb-8">Proyectos</h2>
        <section className="w-full max-w-6xl mx-auto"> {/* CAMBIO: Añadido mx-auto para centrar el bloque de proyectos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
            {galleryImages.map((img) => {

              // 1. Determinar si el enlace es externo o interno
              const isExternal = img.href.startsWith("http");

              // 2. Definir el contenido que siempre va dentro del enlace (la imagen y el título)
              const content = (
                <div className="cursor-pointer group">
                  {/* 🔳 Recuadro cuadrado */}
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <p className="mt-2 text-center text-gray-700 font-medium text-sm sm:text-base">
                    {img.title}
                  </p>
                </div>
              );

              // 3. Devolver el componente de enlace apropiado
              if (isExternal) {
                return (
                  <a
                    key={img.id}
                    href={img.href}
                    target="_blank" // Abre el link en una nueva pestaña
                    rel="noopener noreferrer" // Mejora la seguridad y rendimiento
                  >
                    {content}
                  </a>
                );
              } else {
                return (
                  <Link key={img.id} href={img.href}>
                    {content}
                  </Link>
                );
              }
            })}
          </div>
        </section>
      </section>

      {/* SECCIÓN DE LOGROS CORREGIDA Y COMPLETADA */}
      <section className="bg-cover bg-center container mx-auto p-9">
        <h2 className="text-black text-3xl text-center font-bold mb-8">Logros</h2>
        <section className="w-full max-w-6xl mx-auto"> {/* CAMBIO: Añadido mx-auto para centrar el bloque de logros */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
            {logrosImages.map((img) => {

              // Determinar si el enlace es externo o interno
              const isExternal = img.href.startsWith("http");

              const content = (
                <div className="cursor-pointer group">
                  {/* 🔳 Recuadro cuadrado */}
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <p className="mt-2 text-center text-gray-700 font-medium text-sm sm:text-base">
                    {img.title}
                  </p>
                </div>
              );

              // Devolver el componente de enlace apropiado (Link de Next.js o <a> tradicional)
              if (isExternal) {
                return (
                  <a
                    key={img.id}
                    href={img.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                );
              } else {
                return (
                  <Link key={img.id} href={img.href}>
                    {content}
                  </Link>
                );
              }
            })}
          </div>
        </section>
      </section>
    </>
  );
}