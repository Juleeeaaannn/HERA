import { useState } from 'react'
import './App.css'
const articleData = {
  title: '"Llamar a las partes del cuerpo por su nombre no le quita inocencia a la infancia, la protege"',
  author: "Marianela Chavez",
  date: "1 de Octubre, 2026",
  image: "https://imgs.search.brave.com/Ky9soTDZRP85FD6VjWsU2gpP2HJirIoJhQ-trreLHiM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzIwLzg2Lzk4LzEz/LzM2MF9GXzIwODY5/ODEzODFfNXR6d2xx/ZDFwcEYxbnpCekJR/RzVMcEFId0NQbW90/ZlEuanBn",
  imageAlt: "Personas caminando en la ciudad",
 
  // El contenido ahora soporta párrafos, citas e imágenes intercaladas
  //tipos: paragraph
  content: [
    {
      type: "paragraph",
      text: "Frente a los tabúes culturales que persisten en la provincia, la psicóloga infantil Celeste Sánchez advierte que el uso de eufemismos dificulta las denuncias por vulneración de derechos. La utilización de la anatomía correcta facilita el relato en la Justicia y fortalece la ESI desde los primeros años de vida."
    },
    
    {
      type: "paragraph",
      text: "En la provincia de San Juan, los datos judiciales vinculados a las infancias revelan una problemática latente y dolorosa. Las estadísticas oficiales difundidas por el Ministerio Público Fiscal de San Juan a través de la tarea de la Unidad Fiscal de Investigación de Abordaje Territorial e Integral de Niños, Niñas y Adolescentes Víctimas de Delitos (UFI ANIVI) indican que el 76% de los expedientes investigados por delitos contra menores en la provincia corresponden a casos de abuso sexual infantil.Asimismo, los reportes judiciales locales advierten un promedio de hasta cuatro denuncias diarias ingresadas en ANIVI por vulneraciones contra la integridad sexual de niños, niñas y adolescentes. A este escenario provincial se le suma la evidencia nacional recopilada por la fundación Red por la Infancia, la cual señala que entre el 70% y el 80% de estos episodios ocurren dentro del ámbito intrafamiliar o a manos de personas del entorno cercano de la víctima."
    },
    {
      type: "paragraph",
      text: 'Frente a estas cifras, la respuesta preventiva en las primeras etapas de desarrollo resulta determinante. No obstante, en la cotidianeidad de las familias sanjuaninas todavía reaparece una costumbre muy arraigada: la sustitución de la terminología anatómica por apodos como "cosa", "pajarito" o "la florcita". Aunque estos eufemismos suelen emplearse con una intención de resguardo, la evidencia clínica demuestra que construyen un velo de misterio y vergüenza en torno al propio cuerpo que perjudica de manera directa a los niños a la hora de expresar cualquier situación de incomodidad o vulneración.'
    },
    {
      type: "paragraph",
      text: 'Es justamente en esa brecha entre la duda familiar y la necesidad de resguardo donde el ámbito escolar cobra un rol estratégico. Cuando el entorno privado no logra proporcionar el vocabulario técnico por temor o pudor, la institución educativa interviene como un espacio de contención capaz de institucionalizar el aprendizaje del autocuidado de manera sistemática. '
    },
    {
      type: "paragraph",
      text: 'La implementación del programa de Educación Sexual Integral (ESI) en el nivel inicial del sistema educativo sanjuanino constituye un pilar clave para contrarrestar los mitos familiares. Al abordar los contenidos de conocimiento del cuerpo, afectividad y límites personales dentro del aula, la escuela pública actúa como un agente democratizador de derechos, permitiendo que la identificación anatómica científica se transforme en un hábito cotidiano de prevención.'
    },
    {
      type: "paragraph",
      text: 'La especialista en psicología infantil, de amplia trayectoria en el ámbito de salud mental y protección de las infancias en San Juan, afirmó que la enseñanza de los nombres anatómicos (vagina, vulva, pene, testículos) constituye un acto de cuidado que debe instaurarse a partir de los dieciocho meses o dos años. Según la especialista, cuando un niño conoce la palabra exacta se le brindan herramientas de precisión comunicativa para desarmar la barrera de confusión o vergüenza que generan los eufemismos.'
    },
    {
      type: "paragraph",
      text: 'Desde la perspectiva jurídica y asistencial que articula el trabajo de la UFI ANIVI con el sistema educativo, la precisión en el vocabulario del niño resulta determinante al momento de recibir una revelación. “No es lo mismo que un chiquito diga "me tocó la cosita", frase que un adulto puede malinterpretar o desestimar, a que diga "me tocó la vulva" o "me tocó el pene". El nombre técnico valida el relato del niño, le quita ambigüedad y permite que los adultos actuemos con rapidez y certeza”, remarcó Sánchez.'
    },
  ],
 
  socials: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "mailto:profesora@universidad.edu.ar"
  }
};


const Articulo = () => {
  return (
    <article className="mx-140 p-4 md:p-8 font-display">
     
      {/* Encabezado */}
      <header className="mb-6">
        <h1 className="text-6xl font-bold text-wine mb-3 leading-tight">
          {articleData.title}
        </h1>
        <div className="text-2xl text-gray-500 mb-4">
          Publicado el {articleData.date} • Por {articleData.author}
        </div>
      </header>


      {/* Imagen Principal */}
      <div className='place-items-center place-content-center'>
        {articleData.image && (
        <img
            src={articleData.image}
            alt={articleData.imageAlt}
            className="w-full h-64 object-cover rounded-lg mb-8"
        />
        )}

      </div>


      {/* Cuerpo del texto dinámico (procesa párrafos, citas e imágenes) */}
      <div className="text-base text-gray-700 leading-relaxed space-y-20 mx-auto">
        {articleData.content.map((block, index) => {
          if (block.type === "quote") {
            return (
              <blockquote key={index} className="font-semibold text-wine bg-gray-100 p-4 rounded-md border-l-4 text-2xl border-blue-500">
                "{block.text}"
              </blockquote>
            );
          }
         
          if (block.type === "image") {
            return (
              <figure key={index} className="my-8">
                <img
                  src={block.src}
                  alt={block.alt}
                  className="w-full h-auto rounded-lg object-cover"
                />
                {block.caption && (
                  <figcaption className="text-sm text-wine mt-2 text-center">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          }


          // Por defecto, renderiza como párrafo
          return (
            <p key={index} className='text-wine text-4xl'>
              {block.text}
            </p>
          );
        })}
      </div>


      {/* Redes sociales de la autora */}
      <div className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between">
        <div className="text-2xl text-gray-600 font-medium">
          Escrito por {articleData.author}:
        </div>
      </div>
     
    </article>
  );
};
export default Articulo


