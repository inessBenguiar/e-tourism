export default function Footer() {
  return (
    <section className='relative '>
      <img
        src='/assets/footer.svg'
        alt='footer'
        width={354}
        height={1622}
        className='object-cover object-top w-full -mt-32 h-36'
      />
      <div
        className='absolute inset-0 top-0 h-10 bg-white'
        style={{ zIndex: 999 }}
      />
      <div className='flex absolute top-1/3 text-black  p-5 lg:px-56 gap-[10%]   max-sm:bg-white max-sm:flex-wrap'>
        {data.map((el, idx) => (
          <div key={el.title} className=''>
            <p className='text-3xl font-bold leading-loose tracking-wider max-sm:text-lg whitespace-nowrap'>
              {el.title}
            </p>
            {el.child.map((child) =>
              idx ? (
                <a
                  href='/'
                  className='block text-lg leading-snug max-sm:text-sm hover:opacity-80'
                  key={child}
                >
                  {child}
                </a>
              ) : (
                <p className='text-lg leading-snug max-sm:text-sm' key={child}>
                  {child}
                </p>
              )
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    title: 'Newsletter',
    child: [
      'Sign up to our news latter to receive all the news, about our most treasured places , offers , tours, and so much more ',
    ],
  },
  {
    title: 'Quick Links',
    child: ['facebook', 'instagram', 'AlgerianJourney@gmail.com'],
  },
  {
    title: 'About Us',
    child: ['Contact', 'Who we are', 'FAQs'],
  },
];
