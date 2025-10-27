import { link } from "fs";
import Image from "next/image";

export default function Home() {
  return (
    <><header className=" bg-fuchsia-950 text-white mb-16" >
      <div className="container mx-auto flex justify-end items-center p-10">
        <button className="text-white py-2 px-4 rounded-lg font-bold">
            Conexiones
        </button>
        <button className="bg-white text-black py-2 px-4 rounded-lg font-bold">
            Aspiraciones
          </button>
      </div>
    </header>

    <div 
        className="bg-cover bg-center w-full min-h-screen" 
        style={{ backgroundImage: "url('/img/back_ground.jpg')" }}
      >

        <button className="bg-white text-black py-2 px-4 rounded-lg font-bold"></button>
        
      </div>
    </>
  );
}