import PhoneMosaic from '../assets/phone_mosaic.webp'
import LoginImg from '../assets/LoginTelefono.webp'
import LoginImgDark from '../assets/LoginTelefonoOscuro.webp'
import GroupShowcase from '../assets/GroupsImage.webp'
function Main() {
  return (
    <main className='flex-1 mt-16'>
      <section className='flex flex-column sm:flex-row pt-2 ml-4 mr-4'>
        <div className=' p-4 rounded flex flex-col gap-4 min-w-[50%]'>
          <h1 className='text-center font-[Neue] font-black text-2xl text-primary-text-light dark:text-primary-text-dark md:text-4xl/12 lg:text-6xl/19'>
            Enseña con Inteligencia:<br /><span className='text-white bg-primary-light dark:bg-primary-dark p-0.5'>Plataforma Educativa Ágil y Eficiente.</span>
          </h1>
          <h3 className='text-md font-[DMSans] lg:text-xl 2xl:text-2xl p-1 text-primary-text-light dark:text-primary-text-dark text-center '>Optimiza tu enseñanza con <strong>IA integrada y un diseño centrado en lo esencial</strong>, para que puedas dedicar más tiempo a lo que realmente importa.</h3>
        </div>
        <div>
          <figure>
            <img src={PhoneMosaic} alt="3 moviles con fotos" />
          </figure>
        </div>
      </section>
      <section className='mt-12 pt-6'>
        <h2 className='text-center font-[Neue] text-primary-text-light dark:text-primary-text-dark font-black text-2xl md:text-4xl/12 lg:text-6xl/19'>La mejor aplicación para la educación</h2>
        <div className='flex flex-col md:flex-row pl-6 pr-6 gap-4'>
          <article className='bg-primary-light w-full md:max-w-[70%] rounded '>
            <h2 className='text-center font-[Neue] text-xl md:text-2xl/12 lg:text-3xl/19'>Multiples Academias al mismo tiempo</h2>
            
          </article>
          <article className='bg-secundary-light w-[100%] md:w-[30%] flex justify-center rounded'>
            <img className='w-[200px]' src={GroupShowcase} alt="" />
          </article>
        </div>
      </section>
    </main>
  )
}

export default Main
