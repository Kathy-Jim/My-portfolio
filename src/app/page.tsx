"use client";
import Link from "next/link";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Carrusel de educación
const carouselImages = [
  { id: "1", src: "/img/logo_hilasal.jpg", title: "¡Supérate! Hilasal" },
  { id: "2", src: "/img/logo_sanjose.png", title: "CECE San José" },
  { id: "3", src: "/img/logo_kodigo.jpg", title: "Kodigo" },
];

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
          <span className="text-xl font-semibold">Mi portafolio</span>
          <div className="flex space-x-4">

            <button className="text-white py-2 px-4 rounded-lg font-bold">
              Conexiones
            </button>

            <Link href="/Aspiraciones" passHref>
              <span className="bg-white text-black py-2 px-4 rounded-lg font-bold cursor-pointer inline-block">
                Aspiraciones
              </span>
            </Link>
          </div>
        </div>
      </header>


      <div
        className="**bg-fuchsia-300** bg-cover bg-center w-full min-h-screen flex items-end justify-left p-9"
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

      <section className="**bg-fuchsia-300** bg-cover bg-center container mx-auto p-9">
        <br />
        <br />
        <h2 className="text-black text-3xl font-bold mb-8">Sobre mí</h2>
        <div className="flex flex-col md:flex-row gap-6 mb-9 items-start justify-center">
          <div className="w-full md:w-1/3 flex justify-center">

            {/* Ajuste de la primera imagen*/}
            <Image
              className="rounded-3xl max-w-xs w-full h-auto"
              src="/img/imagen.jpg"
              alt="profile_photo"
              width={300}
              height={400}
            />
          </div>

          <div className="w-full md:w-2/3 flex justify-center">
            {/* Ajuste de imagenes en la sección Acerca de mi*/}
            <Image
              className="rounded-3xl max-w-lg w-full h-auto"
              src="/img/imagen01.jpg"
              alt="Grupo Digital Talent"
              width={600} // Un valor de ancho más realista para el placeholder
              height={400} // Un valor de alto más realista para el placeholder
            />
          </div>
        </div>
      </section>


      <section className="**bg-fuchsia-300** bg-cover bg-center container mx-auto p-9">
        <h2 className="text-black text-3xl font-bold mb-8">Educación</h2>

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
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === idx ? 'bg-fuchsia-950' : 'bg-fuchsia-300 hover:bg-fuchsia-400'
                    }`}
                  aria-label={`Ir a la diapositiva ${idx + 1}`}
                />
              ))
            }
          </div>
        </div>
      </section>

      <section className="**bg-fuchsia-300** bg-cover bg-center container mx-auto p-9">
        <h2 className="text-black text-3xl bg-justify-center font-bold mb-8">Proyectos</h2>

      </section>
    </>
  );
}