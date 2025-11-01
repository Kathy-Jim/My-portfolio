import Link from "next/link";
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

            <Link href="/Aspiraciones" passHref>
              <span className="bg-white text-black py-2 px-4 rounded-lg font-bold cursor-pointer inline-block">
                Aspiraciones
              </span>
            </Link>

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


      <div className="**bg-fuchsia-300** **text-black**">
        <div className="container mx-auto p-8">
          <br />
          <br />
          <h2 className="text-black text-3xl font-bold mb-6">Sobre mí</h2>
          <div className="flex justify-right mb-9">
             <Image className="rounded-3xl" src="/img/img01.png" alt="profile_photo" width={350} height={0}/>
          </div>
        </div>
      </div>

    <div className="container mx-auto p-8">
      <h2 className="text-black text-3xl font-bold mb-6">Educación</h2>
      <p className="text-lg text-gray-700 mb-4">
        <Image className="rounded-3xl mb-4" src="/img/logo_hilasal.jpg" alt="education_photo" width={300} height={0}/>
      </p>
      <p className="text-lg text-gray-700">
        <Image className="rounded-3xl mb-4" src="/img/logo_sanjose.png" alt="education_photo" width={300} height={0}/>     
      </p>
      <p className="text-lg text-gray-700">
        <Image className="rounded-3xl mb-4" src="/img/logo_kodigo.jpg" alt="" width={300} height={0}/>
      </p>
      </div>
    </>
  );
}