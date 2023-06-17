import Footer from './footer';
import Hero from './hero';
import Map from './map';
import Updates from './updates';

import './base.css';

export default function Home() {
  return (
    <main className='bg-black main--page--tailwind--build'>
      <Hero />
      <Map />
      <Updates />
      <Footer />
    </main>
  );
}
