import { FaGoogle } from 'react-icons/fa';
import Head from 'next/head';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleLogin } from '../store/auth';
import { useRouter } from 'next/router'
import Image from 'next/image';

const Login = () => {

    const dispatch = useDispatch();
    const { status } = useSelector( state => state.auth );
    const router = useRouter();

    const handleGoogleLogin = async () => {
        await dispatch( startGoogleLogin() );
        router.replace('/');
    }

    return (
        <>
            <Head>
                <title>Iniciar Sesión | Ecommerce </title>
            </Head>
            <Header />
            <div className="w-full login-height bg-gray-800 flex flex-col items-center justify-center animate__animated animate__fadeIn">
                <div className="rounded-lg w-auto h-auto p-4 bg-blue-300">
                    <h1 className="font-normal text-center text-2xl block ">Iniciar Sesión</h1>
                    <div className="flex w-full justify-center">
                        <Image src="/img/autenticar.svg" alt="autenticar" width="200" height="200" />
                        </div>
                    <div>
                            <button onClick={handleGoogleLogin} className="w-60 bg-blue-600 text-white p-2 flex items-center justify-center rounded-lg hover:bg-white hover:text-black transition ease-in-out focus:ring-4 focus:ring-blue-500 md:text-sm">

                            {status === 'loading' && <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>}

                            {status === '' && <> <FaGoogle className="mr-2"/> Ingresar con Google </>}

                            {status === 'success' && 'Ingreso correcto'}
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login
