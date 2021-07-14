import React from 'react'
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="w-full h-60 bg-black flex flex-col items-center justify-center">
            <p className="text-white">Ecommerce {new Date().getFullYear()} &copy;</p>
            <p className="text-white">Por Daniel Díaz</p>
            <p className="text-white"><a href="https://github.com/danield413" without rel="noreferrer" target="_blank" className="flex flex-row items-center"><AiFillGithub /> <span className="ml-1">Github</span></a></p>
        </footer>
    )
}

export default React.memo(Footer)
