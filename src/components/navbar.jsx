import { cn } from '../lib/utils';

export default function Navbar({ className, ...props }) {
  return (
    <nav
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.66), transparent)',
      }}
      className={cn(
        'flex [&>*]:basis-1/3 items-center justify-between [&>*]:flex [&>*]:items-center px-6 sm:py-3  text-white',
        className
      )}
      {...props}
    >
      <a href='/' className='gap-4'>
        <img src={'./assets/logo.svg'} alt='logo' width={60} height={60} />
        <h2 className='text-sm font-extrabold sm:text-2xl font-colombo max-sm:whitespace-nowrap'>
          Algerian Journey
        </h2>
      </a>
      <div
        style={{ borderBottom: '1px solid' }}
        className='max-sm:!hidden pb-2 mt-2 capitalize  border-white justify-evenly'
      >
        {list.map((el) => (
          <a
            role='listitem'
            href='/'
            className='transition-all hover:opacity-80 max-sm:text-xs'
            key={el}
          >
            {el}
          </a>
        ))}
      </div>
      <div />
    </nav>
  );
}

const list = ['about us', 'help', 'contact'];
