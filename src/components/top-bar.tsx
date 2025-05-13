import { abrilFatface } from '@/app/ui/fonts';
import '@/styles/app.css';
import Link from 'next/link';

const TopBar = () => (
  <header className="top-bar w-full top-0 left-0 shadow-md">
    <div className="mx-auto flex justify-between items-center p-2 pl-4 pr-4">
      <div className="flex items-center space-x-1">
        <Link href="/">
          <img
            src="/lords-logo.png"
            alt="Logo"
            className="h-20 w-auto cursor-pointer"
          />
        </Link>{' '}
      </div>
      <nav className={`${abrilFatface.className} flex space-x-6`}>
        <Link href="/about">About</Link>
      </nav>
    </div>
  </header>
);

export default TopBar;
