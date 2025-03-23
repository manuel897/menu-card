import '@/styles/app.css';
import Logo from '@/components/logo';

const TopBar = () => (
  <header className="top-bar w-full bg-black/40 top-0 left-0 shadow-md z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
      <div className="flex items-center space-x-2">
        <img src="/lords-logo.png" alt="Logo" className="h-10 w-auto" />
      </div>
      <nav className="flex space-x-6">
        <a href="#about" className="text-gray-700 hover:text-red-600">
          About
        </a>
        <a href="#contact" className="text-gray-700 hover:text-red-600">
          Contact
        </a>
      </nav>
    </div>
  </header>
);

export default TopBar;
