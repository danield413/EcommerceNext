import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Head from 'next/head';
import Link from 'next/link';
import Product from '../components/Product';
import getTotal from '../helpers/getTotal';
import Footer from '../components/Footer';

const Cart = () => {

  const { uid } = useSelector( state => state.auth );
  const { cart } = useSelector( state => state.products );

  if(!uid) {
    return (
      <>
        <Head>
          <title>Mi carrito</title>
        </Head>
        <Header />
        <div className="bg-gray-700 w-full container-height text-white py-8 flex flex-col">
          <h2 className="text-4xl text-center">UPS...</h2>
          <h3 className="text-xl text-center">Debes iniciar sesión primero</h3>
          <Link href="/login">
            <a className="mt-4 self-center border-2 w-40 text-center border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition focus:ring-4 focus:ring-blue-500">Iniciar sesión</a>
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
      <>
      <Head>
        <title>Mi carrito</title>
      </Head>
        <Header />
        <div className="w-full container-height animate__animated animate__fadeIn">
          <div className="px-16 flex items-center">
            
            <div className="w-7/12 mt-4 px-4 h-96 overflow-auto">
            {cart.length > 0 ?
              cart.map( product => {
                return <Product product={product} key={product.id} cart={true}/>
              })
              : <h2 className="mt-24 leading-none tracking-tighter title-font text-2xl text-center">No hay productos</h2>
            }
              
            </div>
           <div className="w-5/12 mx-4">
            <h2 className="leading-none tracking-tighter title-font text-2xl text-center">Resumen</h2>
            
              <div className="w-full bg-gray-300 h-64 mt-4 rounded-lg">
                <div className="grid grid-cols-2 p-4">
                  <div className="border-r-2 border-blue-800">
                    <p className="text-lg text-center my-4">Cantidad</p>
                    <p className="text-lg text-center my-4">Descuentos</p>
                    <p className="text-lg text-center my-4">Subtotal</p>
                    <p className="text-lg text-center my-4">TOTAL</p>
                  </div>
                  <div>
                    <p className="text-lg text-center my-4">{cart.length} productos</p>
                    <p className="text-lg text-center my-4">N/A</p>
                    <p className="text-lg text-center my-4">$ {getTotal(cart)} USD</p>
                    <p className="text-lg text-center my-4">$ {getTotal(cart)} USD</p>
                  </div>
                </div>
              </div>
           </div>
          </div>
        </div>
        <Footer />
      </>
  )
}

export default Cart