import React from 'react';
import Link from "next/link";
import { BiCartAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import { changeSearchProducts } from "../store/products";
import { RiShoppingCartLine } from 'react-icons/ri';
import  { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  
  const { picture, displayName } = useSelector(state => state.auth);
  const { cart } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch( changeSearchProducts( value ) );
  }

  return (
    <>
      <nav className="w-full h-16 bg-gray-800 flex items-center justify-between px-14 lg:px-4 fixed z-50">
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
              className="w-96 sm:w-64 xs:w-48 h-10 px-2 rounded  border-none focus:outline-none focus:ring focus:ring-blue-600 transition"
              placeholder="Buscar productos"
              onChange={handleChange}
            />
          </form>
        </div>
        <div className="inline-block flex items-center">
          <span className="mr-2 text-white">{ cart.length }</span>
          <div className="inline-block text-white mr-4 cursor-pointer hover:text-gray-400 transition">
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
                <button className="p-4 sm:p-1 hidden lg:inline"><HiOutlineMenuAlt3 color="#fff" size="1.5rem"/></button>
                </>
                : <Link
                    href="/login"
                >
                    <a className="border-none bg-blue-600 hover:bg-blue-800 transition text-white rounded-lg focus:ring-2 focus:ring-white px-4 sm:p-1 py-2 lg:hidden">Iniciar Sesión</a>
                </Link>

            }

        </div>
      </nav>
    </>
  );
};

export default Navbar;
