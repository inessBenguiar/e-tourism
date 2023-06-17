import { useSwiper } from 'swiper/react';

const Navigation = () => {
  const swiper = useSwiper();
  return (
    <>
      <img
        alt='next'
        width={88}
        height={60}
        className='absolute z-50 max-sm:scale-50   right-[5%] sm:top-[20%] top-[10%] cursor-pointer hover:opacity-60'
        src={'/assets/next-arrow.svg'}
        onClick={() => swiper.slideNext()}
      />
      <img
        alt='next'
        height={60}
        width={88}
        className='absolute z-50 max-sm:scale-50   right-[10%] bottom-[15%] cursor-pointer hover:translate-x-4 duration-500 transition-all'
        src={'/assets/next-road.svg'}
        onClick={() => swiper.slideNext()}
      />
      <img
        alt='grass'
        height={257}
        width={1615}
        className='absolute z-10 object-cover w-full -bottom-20 max-sm:bottom-0'
        src={'/assets/dark-top.svg'}
      />
    </>
  );
};

export default Navigation;
