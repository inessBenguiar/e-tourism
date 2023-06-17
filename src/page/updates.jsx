import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

export default function Updates() {
  return (
    <section
      style={{ backgroundImage: 'url(/assets/bg-tree.svg)' }}
      className='flex [&>*]:basis-full lg:p-56 p-5 gap-10 bg-no-repeat bg-bottom relative max-sm:flex-wrap'
    >
      <div className='flex flex-col gap-10 '>
        <p className='m-0 text-2xl tracking-widest text-white max-sm:text-lg'>
          Latest Updates
        </p>
        <p className='m-0 text-5xl font-extrabold leading-tight tracking-widest text-white max-sm:text-2xl w-80 font-playfair'>
          Stories from <br />
          our Blogs
        </p>
        <a href='/' className='relative transition-all hover:opacity-80 grow'>
          <img
            src='/assets/update-img1.png'
            alt=''
            width={356}
            height={258}
            className='w-full h-full'
          />
          <Heading>lac Noir Akfadou, Bejaia</Heading>
        </a>
      </div>
      <a href='/' className='relative transition-all hover:opacity-80 grow'>
        <img
          src='/assets/update-img2.png'
          alt=''
          width={356}
          height={558}
          className='w-full h-full'
        />
        <Heading>Jijel , Le phare de Ras Afia</Heading>
      </a>
      <div className='flex flex-col gap-10'>
        <a href='/' className='relative transition-all hover:opacity-80 grow'>
          <img
            src='/assets/update-img3.png'
            alt=''
            width={356}
            height={458}
            className='w-full h-full'
          />
          <Heading>Sahara , des Oasis du paradis</Heading>
        </a>
        <button className='flex items-center gap-2 text-3xl font-semibold text-black transition-all max-sm:text-lg hover:bg-theme-green/80 active:scale-95 max-sm:h-20 h-36 place-content-center bg-theme-green max-sm:mb-32'>
          See More <ArrowRight className='stroke-[3px]' />
        </button>
      </div>
      <img
        style={{ transform: 'rotate(12deg)' }}
        src={'/assets/logo.svg'}
        className='absolute z-50 -top-[10%] max-sm:top-0 right-[5%]  max-sm:scale-50'
        alt='logo'
        width={240}
        height={240}
      />
    </section>
  );
}

const Heading = ({ children }) => {
  return (
    <>
      <p className='absolute h-20 m-0 text-xl font-bold leading-7 tracking-widest text-white left-6 bottom-1 w-60'>
        {children}
      </p>
    </>
  );
};
