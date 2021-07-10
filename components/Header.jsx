import Link from 'next/link'
import React from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

const Header = ({ lastPage = '/' }) => {

    return (
        <header className="w-full h-16 bg-gray-800 grid grid-cols-3">
            <div className="flex items-center">
                <Link href={lastPage}>
                    <a className="decoration-none outline-none ml-4 border-2 border-white px-4 py-2 text-white rounded-lg fhover:bg-white hover:text-black hover:bg-white transition ease-in">Atrás</a>
                </Link>
            </div>
            <div className="flex items-center justify-center">
                <Link href="/">
                    <a className="text-lg no-underline text-white flex items-center"><RiShoppingCartLine className="inline mr-2" /> Ecommerce </a>
                </Link>
            </div>
            
        </header>
    )
}

export default Header
