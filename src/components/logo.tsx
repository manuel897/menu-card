import Image from 'next/image';

const Logo = () => (
  <div className={`relative w-full h-50 `}>
    <Image
      src={
        process.env.NEXT_PUBLIC_IS_GITHUB_PAGE === 'true'
          ? '/menu-card/logo.png'
          : '/logo.png'
      }
      alt={'logo'}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>
);

export default Logo;
