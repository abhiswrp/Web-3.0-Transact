import { useState } from 'react';
import PropTypes from 'prop-types';
import WalletsSection from '../components/WalletsSection';
import logo from '../../images/Abhishek_Swaroop_Sign.png';

const NavbarItem = ({ title, href, classProps }) => (
  <li className={`mx-4 cursor-pointer hover:text-gray-300 ${classProps}`}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  </li>
);

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  classProps: PropTypes.string,
};

const Navbar = () => {
  const [showWallets, setShowWallets] = useState(false);

  const toggleWallets = () => setShowWallets(!showWallets);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="flex justify-start items-center w-full">
        <img src={logo} alt="logo" className="w-16 h-16 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <NavbarItem title="Market" href="https://etherscan.io/" />
        <NavbarItem title="Exchange" href="https://exchange.example.com/" />
        <NavbarItem title="Tutorials" href="https://tutorials.example.com/" />
        <li
          className="mx-4 cursor-pointer hover:text-gray-300"
          onClick={toggleWallets}
        >
          Wallets
        </li>
      </ul>
      {showWallets && (
        <div className="absolute top-20 right-0 bg-gray-800 text-white shadow-md rounded-md p-4 z-10">
          <WalletsSection />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
