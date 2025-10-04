import { abrilFatface } from '@/app/ui/fonts';
import '@/styles/app.css';
import Image from 'next/image';
import Link from 'next/link';

const TopBar = () => (
  <header className="top-bar w-full top-0 left-0 shadow-md">
    <div className="mx-auto flex justify-between items-center p-2 pl-4 pr-4">
      <div className="flex items-center space-x-1">
        <Link href="/">
          <Image
            src={
              process.env.NEXT_PUBLIC_IS_GITHUB_PAGE === 'true'
                ? '/menu-card/logo.png'
                : '/logo.png'
            }
            alt="Logo"
            className="h-20 w-auto cursor-pointer"
            width={100}
            height={100}
          />
        </Link>{' '}
      </div>
      <nav className={`${abrilFatface.className} flex space-x-6`}>
        <Link href="/about">About Us</Link>
      </nav>
    </div>
  </header>
);

export default TopBar;
