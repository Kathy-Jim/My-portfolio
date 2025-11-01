import { link } from "fs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-fuchsia-950 text-white mb-16">
        <div className="container mx-auto flex justify-between items-center p-4 sm:p-6 lg:p-10">
            <span className="text-xl font-semibold">Mi portafolio</span>
            <div className="flex space-x-4">
                <button className="text-white py-2 px-4 rounded-lg font-bold">
                    Conexiones
                </button>
                <button className="bg-black text-white py-2 px-4 rounded-lg font-bold">
                    Aspiraciones
                </button>
            </div>
        </div>
      </header>

      <div
        className="bg-cover bg-center w-full min-h-screen flex items-end **justify-end** p-8" 
        style={{ backgroundImage: "url('/img/back_ground.jpg')" }}
      >

        <div
          className="bg-black/70 text-white p-4 rounded-xl font-normal text-xl"
        >
          <strong>Katherine Jimenez</strong>
          <br />
          <span>Futura Abogada con master en</span>
          <br />
          <span>criminología</span>
        </div>

      </div>

      <body>
        
      </body>
    </>
  );
}