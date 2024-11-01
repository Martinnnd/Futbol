"use client"

export default function FutbolAscenso() {
  return (
    <div className="grid bg-mi-cuarto-personalizado">
     <h1 className="text-4xl italic font-bold text-center bg-mi-color-personalizado border-y-2 border-t-0 py-4 border-b border-red-600 text-yellow-500 uppercase">
        Futbol <span className="text-red-600 uppercase">11 argentina</span>
      </h1>
      <div className='bg-mi-septimo-personalizado mt-5 ml-96 mr-96 h-auto rounded-2xl border-2 border-white'>
        <div className='flex justify-center'>
          <div className='border-2 border-gray-500 h-12 w-12 text-center pt-2.5 mt-5 rounded-full text-white uppercase'>dc</div>
        </div>
        <div className='flex justify-around mt-8 gap-24'>
          <div className='border-2 border-gray-500 h-12 w-12 text-center pt-2.5 rounded-full text-white uppercase'>ei</div>
          <div className='border-2 border-gray-500 h-12 w-12 text-center pt-2.5 rounded-full text-white uppercase'>ed</div>
        </div>
        <div className='flex justify-center mt-8'>
          <div className='border-2 border-gray-500 h-12 w-12 text-center pt-2.5 rounded-full text-white uppercase'>mco</div>
        </div>
        <div className='flex justify-center gap-20 mt-8'>
          <div className='border-2 border-gray-500 h-12 w-12 text-center pt-2.5 rounded-full text-white uppercase'>mc</div>
          <div className='border-2 border-gray-500 h-12 w-12 text-center pt-2.5 rounded-full text-white uppercase'>mc</div>
        </div>
        <div className='flex justify-around mt-8 gap-24'>
          <div className='border-2 border-gray-500 h-12 w-12 text-center pt-2.5 rounded-full text-white uppercase'>li</div>
          <div className='border-2 border-gray-500 h-12 w-12 text-center pt-2.5 rounded-full text-white uppercase'>ld</div>
        </div>
        <div className='flex justify-center gap-20 mt-8'>
          <div className='border-2 border-gray-500 h-12 w-12 text-center pt-2.5 rounded-full text-white uppercase'>dfc</div>
          <div className='border-2 border-gray-500 h-12 w-12 text-center pt-2.5 rounded-full text-white uppercase'>dfc</div>
        </div>
        <div className='flex justify-center mt-8 mb-5'>
          <div className='border-2 border-gray-500 h-12 w-12 text-center pt-2.5 rounded-full text-white'>po</div>
        </div>
      </div>

      <div className='flex justify-center gap-2 mt-5 mb-10'>
        <div className='p-10 border-2 border-cyan-400 rounded-3xl'>equipo</div>
        <input type="text" placeholder='Ingresa el futbolista' className='p-1 pr-32 h-9 mt-2 border-2 border-mi-otrocolor-personalizado bg-mi-septimo-personalizado rounded-lg text-left text-gray-400'/>
        <button className='p-1 pr-3 pl-3 border-2 h-9 mt-2 border-mi-otrocolor-personalizado bg-mi-otrocolor-personalizado rounded-lg text-mi-color-personalizado font-bold'>Probar</button>
        <button className='pr-3 pl-3 border-2 h-9 mt-2 border-mi-otrocolor-personalizado rounded-lg text-white'>p</button>
      </div>
    </div>
  );
}
