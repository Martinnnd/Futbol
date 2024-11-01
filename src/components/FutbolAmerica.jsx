"use client"

export default function FutbolAmerica() {
  return (
    <div className="grid bg-mi-cuarto-personalizado">
     <h1 className="text-4xl italic font-bold text-center bg-mi-color-personalizado border-y-2 border-t-0 py-4 border-b border-cyan-500 text-yellow-500 uppercase">
        Futbol <span className="text-cyan-400 uppercase">11 argentina</span>
      </h1>
      <div className='bg-mi-septimo-personalizado mt-5 ml-96 mr-96 h-auto rounded-2xl border-2 border-mi-sexto-personalizado'>
        <div className='flex justify-center'>
          <div className='border-2 border-mi-sexto-personalizado pl-14 pr-14 pt-1 pb-1 mt-5 rounded-xl text-mi-sexto-personalizado'>DC</div>
        </div>
        <div className='flex justify-around mt-8 gap-24'>
          <div className='border-2 border-mi-sexto-personalizado pl-14 pr-14 pt-1 pb-1 rounded-xl text-mi-sexto-personalizado'>EI</div>
          <div className='border-2 border-mi-sexto-personalizado pl-14 pr-14 pt-1 pb-1 rounded-xl text-mi-sexto-personalizado'>ED</div>
        </div>
        <div className='flex justify-center mt-8'>
          <div className='border-2 border-mi-sexto-personalizado pl-14 pr-14 pt-1 pb-1 rounded-xl text-mi-sexto-personalizado'>MCO</div>
        </div>
        <div className='flex justify-center gap-20 mt-8'>
          <div className='border-2 border-mi-sexto-personalizado pl-14 pr-14 pt-1 pb-1 rounded-xl text-mi-sexto-personalizado'>MC</div>
          <div className='border-2 border-mi-sexto-personalizado pl-14 pr-14 pt-1 pb-1 rounded-xl text-mi-sexto-personalizado'>MC</div>
        </div>
        <div className='flex justify-around mt-8 gap-24'>
          <div className='border-2 border-mi-sexto-personalizado pl-14 pr-14 pt-1 pb-1 rounded-xl text-mi-sexto-personalizado'>LI</div>
          <div className='border-2 border-mi-sexto-personalizado pl-14 pr-14 pt-1 pb-1 rounded-xl text-mi-sexto-personalizado'>LD</div>
        </div>
        <div className='flex justify-center gap-20 mt-8'>
          <div className='border-2 border-mi-sexto-personalizado pl-14 pr-14 pt-1 pb-1 rounded-xl text-mi-sexto-personalizado'>DFC</div>
          <div className='border-2 border-mi-sexto-personalizado pl-14 pr-14 pt-1 pb-1 rounded-xl text-mi-sexto-personalizado'>DFC</div>
        </div>
        <div className='flex justify-center mt-8 mb-5'>
          <div className='border-2 border-mi-sexto-personalizado pl-14 pr-14 pt-1 pb-1 rounded-xl text-mi-sexto-personalizado'>PO</div>
        </div>
      </div>

      <div className='flex justify-center gap-2 mt-5 mb-10'>
        <div className='p-10 border-2 border-white rounded-3xl'>equipo</div>
        <input type="text" placeholder='Ingresa el futbolista' className='p-1 pr-32 h-9 mt-2 border-2 border-mi-otrocolor-personalizado bg-mi-septimo-personalizado rounded-lg text-left text-gray-400'/>
        <button className='p-1 pr-3 pl-3 border-2 h-9 mt-2 border-mi-otrocolor-personalizado bg-mi-otrocolor-personalizado rounded-lg text-mi-color-personalizado'>Probar</button>
        <button className='pr-3 pl-3 border-2 h-9 mt-2 border-mi-otrocolor-personalizado rounded-lg text-white'>p</button>
      </div>
    </div>
  );
}
