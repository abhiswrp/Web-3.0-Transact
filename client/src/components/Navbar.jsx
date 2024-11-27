// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { HiMenuAlt4} from 'react-icons/hi';
// import { AiOutlineClose } from 'react-icons/ai';
// import logo from '../../images/Abhishek_Swaroop_Sign.png';
// const NavbarItem = ({ title, href, classProps }) => {
//     return (
//       <li className={`mx-4 cursor-pointer ${classProps}`}>
//         <a href={href} target="_blank" rel="noopener noreferrer">
//           {title}
//         </a>
//       </li>
//     );
//   };
// NavbarItem.propTypes = {
//     title: PropTypes.string.isRequired,
//     classProps: PropTypes.string,
// };
// const Navbar=()=>
// {
//     const [toggleMenu, setToggleMenu]=useState(false);
//     return(
//         <nav className="w-full flex md:justify-center justify-between items-center p-4">
//             <div className="flex justify-start items-center w-full">
//                 <img src={logo} alt="logo" className="w-55 cursor-pointer"/>
//             </div>
//             <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
//                 <NavbarItem title="Market" href="https://etherscan.io/" />
//                 <NavbarItem title="Exchange" href="https://exchange.example.com/" />
//                 <NavbarItem title="Tutorial" href="https://tutorials.example.com/" />
//                 <NavbarItem title="Wallets" href="https://wallets.example.com/" />
//             </ul>
//             <div className="flex relative">
//                 {toggleMenu
//                     ?<AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(false)}/>
//                     :<HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(true)}/>
//                 }
//                 {
//                     toggleMenu && (
//                         <ul
//                             className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
//                             flex flex-col justify-start itmes-end rounded-md blue-glassmorphism text-white animate-slie-in
//                             "
//                         >
//                             <li className="text-xl w-full my-2">
//                                 <AiOutlineClose onClick={()=>setToggleMenu(false)}/>
//                             </li>
//                             {["Market","Exchange","Tutorials","Wallets"].map((item, index)=>(
//                                 <NavbarItem key={item + index}title={item} classProps="my-2 text-lg"/>
//                             ))}
//                         </ul>
//                     )
//                 }
//             </div>
//         </nav>
//     );
// }
// export default Navbar;



import { useState } from 'react';
import PropTypes from 'prop-types';
import { HiMenuAlt4} from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../images/Abhishek_Swaroop_Sign.png';
const NavbarItem = ({ title, href, classProps }) => {
    return (
      <li className={`mx-4 cursor-pointer ${classProps}`}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </li>
    );
  };
NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    classProps: PropTypes.string,
};
import { useState } from 'react';

const Navbar = () => {
  const [showWallets, setShowWallets] = useState(false);

  const toggleWallets = () => setShowWallets(!showWallets);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="flex justify-start items-center w-full">
        <img src={logo} alt="logo" className="w-55 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <NavbarItem title="Market" href="https://etherscan.io/" />
        <NavbarItem title="Exchange" href="https://exchange.example.com/" />
        <NavbarItem title="Tutorials" href="https://tutorials.example.com/" />
        <li className="mx-4 cursor-pointer" onClick={toggleWallets}>
          Wallets
        </li>
      </ul>

      {showWallets && <WalletsSection />}
    </nav>
  );
};

export default Navbar;