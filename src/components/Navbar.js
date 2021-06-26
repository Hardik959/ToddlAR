import React from "react";
import koala from "../images/koala.png";
import numbers from "../images/numbers.png";
import abc from "../images/abc.png";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-yellow-200'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <a
            className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white'
            href='#pablo'>
            <Link to='/'>
              <img src={logo} className='w-2/3'></img>
            </Link>
          </a>
          <button
            className='text-navItems cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}>
            <i className='fa fa-bars'></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id='example-navbar-danger'>
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            <Link to='/alphabets'>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xl uppercase font-navFont font-bold leading-snug text-navItems'
                  href='#pablo'>
                  <img src={abc} className='w-14'></img>
                  <span className='ml-2 hover:opacity-80'>Alphabets</span>
                </a>
              </li>
            </Link>
            <Link to='/animals'>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xl uppercase font-navFont font-bold leading-snug text-navItems'
                  href='#pablo'>
                  <img src={koala} className='w-14'></img>
                  <span className='ml-2 hover:opacity-80'>Animals</span>
                </a>
              </li>
            </Link>
            <Link to='/mathematics'>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xl uppercase font-navFont font-bold leading-snug text-navItems'
                  href='#pablo'>
                  <img src={numbers} className='w-14 hover:w-16'></img>
                  <span className='ml-2 hover:opacity-80'>Mathematics</span>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
