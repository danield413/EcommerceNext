import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image'
import { logout } from '../store/auth';
import { useRouter } from 'next/dist/client/router';
import { cleanCart } from '../store/products';

const User = () => {

    const { displayName, picture, email } = useSelector( state => state.auth );
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        router.replace('/login');
        dispatch( logout() );
        dispatch( cleanCart() );
    }

    return (
        <>
            <Head>
                <title>{displayName && displayName} | Ecommerce</title>
            </Head>
            <Header />
            <main className="min-h-screen container-height">
                <div className="mt-4 w-96 h-80 bg-gray-400 mx-auto flex flex-col">
                    <div className="gradient-user flex justify-center row-start-1 row-end-2">
                        {picture && <Image src={picture} alt={displayName} height={100} width={100} className="rounded-full"/>}
                    </div>
                    <p className="uppercase text-center mt-4 text-xl">{displayName}</p>
                    <p className="text-center mt-4">{email}</p>
                    <button onClick={handleLogout} className="self-center w-40 px-4 py-2 bg-blue-800 text-white rounded focus:ring-2 focus:ring-white transition mt-12">Cerrar sesión</button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default User
