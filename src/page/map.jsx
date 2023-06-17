import { Link } from 'react-router-dom';

export default function Map() {
  return (
    <section
      className='grid items-center grid-cols-1 p-5 text-white bg-right bg-no-repeat justify-items-center lg:grid-cols-2 lg:px-56 lg:py-32'
      style={{ backgroundImage: 'url(/assets/bg-map.svg)' }}
    >
      <div className='relative max-lg:scale-80 w-max max-sm:-mt-32 h-max max-sm:scale-[0.6]'>
        <img src={'/assets/map.svg'} alt='map' width={600} height={600} />
        <MapLinks />
      </div>
      <div className='space-y-8 max-md:mt-10 lg:justify-self-end justify-self-start max-sm:-mt-10'>
        <p className='text-2xl tracking-widest max-sm:text-lg'>
          EXPLORE OUR PLACES
        </p>
        <p className='text-5xl font-extrabold leading-normal tracking-widest max-sm:text-2xl font-playfair'>
          Select a Wilaya <br />
          to explore
        </p>
        <p className='text-lg max-sm:text-sm'>
          Wherever the kind of destination you’re willing
          <br />
          to go to , discover Algerien cities , or live a wild <br />
          experience in Algeria’s mountains and nature !
        </p>
        <Link to={'/algeria'} className='block '>
          <button className='h-10 px-8 text-black transition-all bg-white rounded-full cursor-pointer sm:px-14 hover:bg-white/90 sm:h-14'>
            View all
          </button>
        </Link>
      </div>
    </section>
  );
}

const MapLinks = () => {
  return (
    <>
      <a href='/' style={{ right: 151, top: 10 }} className='map-link' />
      <a href='/' style={{ top: 25, right: 215 }} className='map-link' />
      <a href='/' style={{ top: 33, right: 300 }} className='map-link' />
      <a href='/' style={{ top: 53, right: 266 }} className='map-link' />
      <a href='/' style={{ top: 73, right: 315 }} className='map-link' />
      <a href='/' style={{ top: 74, right: 385 }} className='map-link' />
      <a href='/' style={{ top: 140, right: 224 }} className='map-link' />
      <a href='/' style={{ top: 209, right: 358 }} className='map-link' />
      <a href='/' style={{ top: 177, right: 123 }} className='map-link' />
      <a href='/' style={{ top: 54, right: 123 }} className='map-link' />
      <a href='/' style={{ top: 273, right: 109 }} className='map-link' />
      <a href='/' style={{ top: 324, right: 247 }} className='map-link' />
      <a href='/' style={{ top: 493, right: 233 }} className='map-link' />
      <a href='/' style={{ top: 374, left: 202 }} className='map-link' />
      <a href='/' style={{ top: 312, left: 73 }} className='map-link' />
    </>
  );
};
