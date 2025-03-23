import Image from 'next/image';

const Logo = () => (
  <div className={`relative w-30 h-25`}>
    <Image
      src="/lords-logo.png"
      alt={'logo'}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>
);

export default Logo;
