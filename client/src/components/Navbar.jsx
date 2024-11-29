import { useState } from 'react';
import PropTypes from 'prop-types';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleWallets = () => setShowWallets(!showWallets);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="flex justify-start items-center w-full">
        <img src={logo} alt="logo" className="w-17 h-16 cursor-pointer" />
      </div>

      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <NavbarItem title="Market" href="https://etherscan.io/" />
        <NavbarItem title="Exchange" href="https://exchange.example.com/" />
        <NavbarItem title="Tutorials" href="https://tutorials.example.com/" />
        <li className="mx-4 cursor-pointer hover:text-gray-300" onClick={toggleWallets}>
          Wallets
        </li>
      </ul>

      <div className="md:hidden flex items-center">
        <HiMenuAlt4
          fontSize={28}
          className="text-white cursor-pointer"
          onClick={toggleMobileMenu}
        />
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-20 right-0 text-white shadow-md rounded-md p-4 z-10 md:hidden flex flex-col items-start w-full">
          <ul className="list-none">
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
          <AiOutlineClose
            fontSize={28}
            className="absolute top-4 right-4 cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
      )}

      {showWallets && (
        <div className="absolute top-20 right-0 bg-gray-800 text-white shadow-md rounded-md p-4 z-10">
          <WalletsSection />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
