import { useState } from 'react'

import heroImgen from './assets/hero.png'
import heroImg from './assets/logito.png'
import Nota1 from './assets/nota1.avif'
import Articulo from './Notas'


import './App.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './Home'

function App() {
  const [selection, setSelection] = useState('Menu')
  return (
    <div className='bg-white h-screen w-screen overflow-x-hidden'>
      <header className='mb-5 '>
        <div className='flex bg-bright-pink h-60 place-content-center transition-opacity ease-in'>
          <div className='flex flex-col place-content-center place-items-center gap-7'>
            <img src={heroImg} alt='ASDASD' className='h-30'/>
            <div className='flex gap-6 -mt-5 font-semibold'>
              
                <Link to='/' className={`text-3xl text-white cursor-pointer ${selection=='Inicio' ?'underline' : ''}`} onClick={ () => setSelection('Inicio')}>Inicio</Link>
                <Link to='/Notas' className={`text-3xl text-white cursor-pointer ${selection=='Notas' ?'underline' : ''}`} onClick={ () => setSelection('Notas')}>Notas</Link>
                <Link to='/Editoral' className={`text-3xl text-white cursor-pointer ${selection=='Editoral' ?'underline' : ''}`} onClick={ () => setSelection('Editorial')}>Editorial</Link>
                <Link to='/Nosotros' className={`text-3xl text-white cursor-pointer ${selection=='Nosotros' ?'underline' : ''}`}  onClick={ () => setSelection('Nosotros')}>Nosotros</Link>
            </div>
          </div>
        </div>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Notas" element={<Articulo />} />
          </Routes>
        
      </div>
        <div className='flex flex-col gap-8 absolute w-auto h-auto right-30 top-[45%] z-70'>
          <button className='h-25 w-25 place-items-center shadow-2xl/70 shadow-blue-400 rounded-[9999px] bg-blue-700 top-50 z-70 cursor-pointer hover:scale-120 transition-all duration-500 ease-in-out active:scale-90 hover:-translate-x-10'>
            <img src='https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF' className='h-20 w-20'></img>
          </button>
          <button className='h-25 place-items-center w-25 rounded-[9999px] shadow-2xl shadow-fuchsia-400 bg-pink-500 top-50 z-70 cursor-pointer hover:scale-120 transition-all duration-500 ease-in-out active:scale-90 hover:-translate-x-10'> 
            <img src='https://img.icons8.com/?size=100&id=DpOQ6G5p47f0&format=png&color=FFFFFF' className='h-20 w-20'></img>
          </button>
          <button className='h-25 w-25 place-items-center rounded-[9999px] shadow-2xl/70 shadow-red-500 bg-red-700 top-50 z-70 cursor-pointer hover:scale-120 transition-all duration-500 ease-in-out active:scale-90 hover:-translate-x-10'>
            <img src='https://img.icons8.com/?size=100&id=37326&format=png&color=FFFFFF' className='h-20 w-20'></img>
          </button>
        </div>

      <footer className='place-content-center place-items-center h-50 bg-bright-pink font-display border-t border-wine/30'>
        <div className='text-center'>
          <p className='text-white text-3xl'>© 2026 Hera. Todos los derechos reservados.</p>
          <p className='text-white text-3xl'>Política de Privacidad | Términos y Condiciones | Aviso Legal</p>
        </div>
      </footer>
    </div>
  )
}

export default App
