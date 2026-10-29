import Carousel from './carousel'

export function Home () {
    return(
        <>
        <section>
          <div className=' py-10 w-full h-[40vw] place-items-center'>
            <Carousel></Carousel>
          </div>
        </section>
        <section>
          <div className="w-full h-200 pt-20">
            <div className='bg-soft-blue place-content-center py-8 mx-50 relative text-center'>
              <h1 className='text-[75px] text-white font-semibold'>¿Quiénes somos?</h1>
              <div className='absolute z-20 right-0 top-0 w-30 h-42 border-t-[80px] border-t-transparent border-b-[70px] border-b-transparent border-r-[95px] border-r-white'></div>
              <div className='absolute z-20 left-0 top-0 w-30 h-42 border-t-[80px] border-t-transparent border-b-[70px] border-b-transparent border-l-[95px] border-l-white'></div>
            </div>
            <p className='text-wine text-[34px] px-80 text-center font-semibold py-10'>
              Somos un espacio periodístico independiente dedicado a la investigación, divulgación y cobertura de la salud ginecológica, sexual y reproductiva. Nacemos de la necesidad de transformar la manera en que se comunica la salud: alejándonos del tabú, la desinformación y el sesgo de género, para construir un puente riguroso entre la evidencia médica y la vida cotidiana.
              Acompañamos a las personas en cada etapa vital, desde las primeras infancias hasta la tercera edad, promoviendo el conocimiento como una herramienta fundamental para el autocuidado, la soberanía corporal y la toma de decisiones informadas.
            </p>
          </div>
        </section>
        <section className=' -mt-50'>
        <div className="grid grid-cols-[40%_60%] text-6xl grid-rows-[800px_600px] font-display gap-6 p-6 px-50">
          <div className="grid bg-soft-purple p-10 rounded-2xl border border-white/50">
            <h1 className='text-8xl mb-6 text-white'>Misión</h1>
            <p className='text-5xl text-white'>Democratizar la información científica y médica sobre la salud ginecológica y reproductiva mediante un periodismo riguroso, ético y empático. Buscamos visibilizar las realidades biológicas, hormonales y emocionales en todas las fases de la vida, garantizando el acceso a contenidos claros que promuevan los derechos de las personas y fortalezcan su autonomía.</p>
          </div>
          <div className="grid bg-bright-pink p-10 rounded-2xl row-span-2 gap-5 border border-white/50">
            <h1 className='text-8xl mb-6 text-white '>Valores</h1>
            <div className='rounded-2xl p-6 border border-white/50 '>
              <h1 className='text-5xl pb-5 text-white underline'>Rigor Científico y Ética Periodística</h1>
              <p className='text-4xl text-white'>Investigamos y contrastamos cada contenido con especialistas, sociedades médicas y evidencia científica actualizada. Traducimos la complejidad de la medicina a un lenguaje claro, accesible y exento de sensacionalismo.</p>
            </div>
            <div className='rounded-2xl p-6 border border-white/50 '>
              <h1 className='text-5xl pb-5 text-white underline'>Empatía y Perspectiva de Derechos</h1>
              <p className='text-4xl text-white'>Abordamos cada tema con sensibilidad, respeto y libre de juicios. Reconocemos la salud como un derecho humano fundamental y defendemos la soberanía de cada persona sobre su propio cuerpo y sus decisiones.</p>
            </div>
            <div className='rounded-2xl p-6 border border-white/50 '>
              <h1 className='text-5xl pb-5 text-white underline'>Inclusión Intergeneracional</h1>
              <p className='text-4xl text-white'>Diseñamos y adaptamos la información para acompañar a todas las edades. Reconocemos que las necesidades de salud evolucionan a lo largo de la vida y que cada etapa merece una mirada atenta, digna y específica.</p>
            </div>
            <div className='rounded-2xl p-6 border border-white/50 '>
              <h1 className='text-5xl pb-5 text-white underline'>Autonomía y Desmitificación</h1>
              <p className='text-4xl text-white'>Trabajamos para erradicar los tabúes, mitos y estereotipos que históricamente han rodeado la salud hormonal y reproductiva. Brindamos herramientas pedagógicas para que cada individuo comprenda su organismo y ejerza un rol activo en el cuidado de su bienestar.</p>
            </div>
          </div>
          <div className="grid bg-soft-blue p-10 rounded-2xl border border-white/50">
            <h1 className='text-8xl mb-6 text-white'>Visión</h1>
            <p className='text-5xl text-white'>Toda la vaina de la visión.....</p>
          </div>
        </div>
      </section>
        </>
    )
}