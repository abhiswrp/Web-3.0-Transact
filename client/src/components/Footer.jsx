import { Link } from 'react-router-dom';
import logo from '../../images/Abhishek_Swaroop_Sign.png';

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-55" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <a
            href="https://www.linkedin.com/in/abhishek-swaroop-40a7a2224/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-base text-center mx-2 cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            href="https://swaroop-s-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-base text-center mx-2 cursor-pointer"
          >
            Portfolio
          </a>
          <a
            href="https://drive.google.com/your-tutorial-video-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-base text-center mx-2 cursor-pointer"
          >
            Tutorial Video
          </a>
          <Link to="/contact" className="text-white text-base text-center mx-2 cursor-pointer">
            Contact for Query
          </Link>
        </div>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-sm text-center">© 2024 web3.0_transact.</p>
        <p className="text-white text-sm text-center">All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
