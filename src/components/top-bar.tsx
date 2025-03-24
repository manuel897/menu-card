import '@/styles/app.css';
import Logo from '@/components/logo';

const TopBar = () => (
  <header className="top-bar w-full top-0 left-0 shadow-md">
    <div className="mx-auto flex justify-between items-center p-2 pl-4 pr-4">
      <div className="flex items-center space-x-1">
        <img src="/lords-logo.png" alt="Logo" className="h-20 w-auto" />
      </div>
      <nav className="flex space-x-6">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
);

export default TopBar;
