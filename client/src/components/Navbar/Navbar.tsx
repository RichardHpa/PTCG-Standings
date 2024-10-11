import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:justify-center lg:justify-between">
        <Link
          to="/"
          className="flex items-center space-x-3 hover:underline rtl:space-x-reverse"
        >
          <img src="/logo192.png" className="h-10" alt="PTCG Standings.live" />
          <span
            className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
            role="heading"
          >
            PTCG Standings
          </span>
        </Link>
      </div>
    </nav>
  );
};
