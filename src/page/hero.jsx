import Navbar from '../components/navbar';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import googleSignIn from '../lib/firebase';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import Navigation from './navigation';

export default function Hero() {
  return (
    <section className='relative mb-20'>
      <Navbar className='absolute inset-x-0 z-10' />
      <Slider />
    </section>
  );
}

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className='relative h-max'
        loop
      >
        {Array.from(Array(3).keys()).map((idx) => (
          <SwiperSlide key={idx} className='relative h-full'>
            <img
              className='object-cover object-top w-full'
              src={`/assets/cover${idx}.svg`}
              alt={'cover' + idx}
              width={1440}
              height={740}
            />
            <div className='absolute inset-0 grid place-content-center'>
              <button
                onClick={googleSignIn}
                className='px-20 py-2 mt-20 ml-3 text-white transition-all border-0 sm:ml-12 max-sm:scale-50 hover:bg-gray-300/40 sm:mt-52 bg-gray-300/50 ring-2 lg:mt-60 xl:mt-80 ring-white/50'
              >
                Explore
              </button>
            </div>
            <Social />
          </SwiperSlide>
        ))}
        <Navigation />
      </Swiper>
    </>
  );
};

function Social() {
  const data = [
    '/assets/facebook.svg',
    '/assets/instagram.svg',
    '/assets/play.svg',
  ];
  return (
    <div className='absolute z-10 max-sm:scale-50 flex flex-col items-center top-[20%] sm:top-[40%] sm:left-32 left-9 gap-7'>
      {data.map((el) => (
        <a key={el} href='/'>
          <img
            src={el}
            alt='social'
            width={40}
            height={40}
            className='transition-all hover:scale-110'
          />
        </a>
      ))}
    </div>
  );
}
