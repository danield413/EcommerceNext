import Image from 'next/image';
import Link from 'next/link';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/products';
import useReduxSTore from '../hooks/useReduxStore';
import { useRouter } from 'next/dist/client/router';
import { RiAddCircleFill } from 'react-icons/ri';
import { FaTrashAlt } from 'react-icons/fa';

const Product = ({product, cart = false}) => {

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    const { verifyProduct, verifyAuth } = useReduxSTore();

    const handleAddToCart = () => {

        //Authenticated user
        const isLogged = verifyAuth();
        if(!isLogged){
            router.push('/login');
            enqueueSnackbar('Debes iniciar sesión primero', { variant: 'info' });
            return;
        };

        const exists = verifyProduct( product.id );
        if(exists) {
            enqueueSnackbar('El producto ya está añadido al carrito', { variant: 'info' })
            return;
        } else {
            dispatch( addToCart(product) );
            enqueueSnackbar('¡Producto añadido al carrito!', { variant: 'success' });
        }
    }

    const handleRemoveFromCart = () => {
        dispatch( removeFromCart( product.id ) );
        enqueueSnackbar('Producto removido del carrito', { variant: 'info' });
    }

    return (
        <div className="w-full h-38 rounded-lg py-4 my-8 grid grid-cols-2 lg:grid-cols-3 shadow-md animate__animated animate__fadeIn lg:text-sm sm:text-xs">
            <div className="flex justify-start">
                <Image className="object-scale-down " src={product.image} alt="blog" width={300} height={144}/>
            </div>
            <div className="relative lg:col-start-2 lg:col-end-4 lg:px-2">
                <h2 className="my-4 text-md text-black uppercase title-font">{product.title}</h2>
                <h4 className="my-4 text-sm sm:text-xs">$ {product.price} USD</h4>
                {!cart && <Link href="/">
                    <a className="block text-blue-800 w-16">Ver más</a>
                 </Link>}
                {cart ? 
                <button onClick={handleRemoveFromCart} className="bg-blue-600 w-10 px-2 py-2 text-white rounded-lg absolute bottom-0 right-4 focus:ring-2 focus:ring-black transition flex justify-center"><FaTrashAlt /></button>
                :  <button onClick={handleAddToCart}  className="bg-blue-600 w-10 px-2 py-2 text-white rounded-lg absolute bottom-0 right-4 focus:ring-2 focus:ring-black transition flex justify-center"><RiAddCircleFill size="1.3rem"/></button>
                }
                
            </div>
        </div>
    )
}

export default Product
