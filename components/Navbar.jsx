import React, { useState } from 'react';
import Link from "next/link";
import { BiCartAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import { changeSearchProducts } from "../store/products";
import { RiShoppingCartLine } from 'react-icons/ri';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  
  const { picture, displayName } = useSelector(state => state.auth);
  const { cart } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [responsiveMenu, setResponsiveMenu] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch( changeSearchProducts( value ) );
  }

  return (
    <>
      <nav className="w-full h-16 bg-gray-800 flex items-center justify-between px-14 lg:px-4 sm:px-2 fixed z-50">
        <div className="inline-block">
          <Link href="/">
            <a className="text-lg no-underline text-white flex items-center"><RiShoppingCartLine className="inline mr-2" /></a>
          </Link>
        </div>
        <div></div>
        <div className="inline-block">
          <form className="flex items-center" >
            <input
              type="text"
              className="width-search h-10 px-2 rounded  border-none focus:outline-none focus:ring focus:ring-blue-600 transition sm:text-sm"
              placeholder="Buscar productos"
              onChange={handleChange}
            />
          </form>
        </div>
        <div className="inline-block flex items-center">
          <span className="text-sm text-white  md:hidden">{ cart.length }</span>
          <div className="inline-block text-white xs:mr-2 mr-4 cursor-pointer hover:text-gray-400 transition md:hidden">
            <Link href="/cart">
              <a>
                <BiCartAlt size="1.7rem" />
              </a>
            </Link>
          </div>
            {
                (picture && displayName) ?
                <>
                <Link
                    href="/user"
                >
                    <a className="border-none bg-blue-600 hover:bg-blue-800 transition text-white rounded-lg focus:ring-2 focus:ring-white px-4 py-2 flex items-center lg:hidden">
                      <Image src={picture} alt={displayName} height={20} width={20} className="rounded-xl"/><p className="ml-1">{displayName}</p></a>
                </Link>
                </>
                : <Link
                    href="/login"
                >
                    <a className="border-none bg-blue-600 hover:bg-blue-800 transition text-white rounded-lg focus:ring-2 focus:ring-white px-4 sm:p-1 py-2 lg:hidden">Iniciar Sesión</a>
                </Link>

            }
            {
              responsiveMenu 
              ? 
              <button onClick={() => setResponsiveMenu(!responsiveMenu)} className="p-4 sm:p-1 hidden lg:inline transition"><MdClose color="#fff" size="1.5rem" /></button>
              : <button onClick={() => setResponsiveMenu(!responsiveMenu)} className="p-4 sm:p-1 hidden lg:inline transition"><HiOutlineMenuAlt3 color="#fff" size="1.5rem"/></button>
            }
            

        </div>
        <div className={`w-full h-auto bg-red-800 absolute top-16 ${responsiveMenu ? 'left-0' : 'left-100vw'} transition-menu`}>
          <ul>
              <li className="flex justify-center items-center transition">
                {
                  (picture && displayName) ?
                  <>
                    <Link href="/user">
                      <a className="bg-gray-800 text-white sm:text-sm w-full py-2 h-full flex items-center justify-center hover:bg-gray-600 transition"> <Image src={picture} alt={displayName} height={20} width={20} className="rounded-xl"/><span className="ml-1">{displayName}</span></a>
                    </Link>
                  </>
                  : 
                  <>
                    <Link href="/login">
                      <a className="bg-gray-800 flex flex-row items-center justify-center py-2 w-full hover:bg-gray-600 text-white sm:text-sm">Iniciar sesión</a>
                    </Link>
                  </>
                }
              </li>
              <li className="lg:hidden md:block flex justify-center items-center transition">
                  <Link href="/cart">
                    <a className="bg-gray-800 flex flex-row items-center justify-center py-2 w-full hover:bg-gray-600"> 
                      <span className="text-sm text-white mr-1">{ cart.length }</span>
                      <p><BiCartAlt size="1.7rem" color="#fff"/></p>
                    </a>
                  </Link>
              </li>
              <li className="bg-gray-900 text-sm  text-gray-300 py-2 text-center">
                Por Daniel Díaz 
              </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
