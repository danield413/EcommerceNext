import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full h-60 bg-black flex flex-col items-center justify-center">
            <p className="text-white">Ecommerce {new Date().getFullYear()} &copy;</p>
            <p className="text-white">By Daniel Díaz</p>
        </footer>
    )
}

export default React.memo(Footer)
