import PhoneMosaic from '../assets/phone_mosaic.webp'
import LoginImg from '../assets/LoginTelefono.webp'
import LoginImgDark from '../assets/LoginTelefonoOscuro.webp'
function Main() {
  return (
    <main className='flex-1 mt-16'>
      <section className='flex flex-column sm:flex-row pt-8 ml-4 mr-4'>
        <div className=' p-4 rounded flex flex-col gap-4 min-w-[50%]'>
          <h1 className='text-center font-black text-2xl text-primary-text-light dark:text-primary-text-dark md:text-4xl/12 lg:text-6xl/19'>
            Enseña con Inteligencia:<br /><span className='text-white bg-primary-light dark:bg-primary-dark p-0.5'>Plataforma Educativa Ágil y Eficiente.</span>
          </h1>
          <h2 className='text-md lg:text-3xl 2xl:text-4xl p-1 text-primary-text-light dark:text-primary-text-dark '>Optimiza tu enseñanza con <strong>IA integrada y un diseño centrado en lo esencial</strong>, para que puedas dedicar más tiempo a lo que realmente importa.</h2>
        </div>
        <div>
          <figure>
            <img src={PhoneMosaic} alt="" />
          </figure>
        </div>
      </section>
    </main>
  )
}

export default Main
