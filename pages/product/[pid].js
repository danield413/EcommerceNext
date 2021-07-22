import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Spinner from '../../components/Spinner';
import Head from 'next/head';

const ProductPage = () => {

    const router = useRouter();
    const { pid } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const getProduct = async () => {
            setLoading(true);
            const resp = await axios.get(`https://fakestoreapi.com/products/${pid}`)
            if(resp.status === 200) {
                const { data } = resp;
                setProduct(data);
                setLoading(false);
            } else {
                setLoading(false);
                return;
            }
        } 
        getProduct();

    }, [pid])

    return (
        <>
            <Head>
                <title>
                    {product ? `${product.title} | Ecommerce` : 'Producto | Ecommerce'}
                </title>
                <meta name="description" content={product ? product.description : 'Producto no encontrado' } />
            </Head>
            <Navbar input={false} />
                <main className="product-height py-16 flex items-center md:items-start">
                    {
                        loading && <Spinner />
                    }
                    {
                        (product && !loading) && 
                        <article className="grid grid-cols-3 px-8 sm:px-2 md:py-8 md:grid-cols-1 md:grid-rows-2 flex justify-center animate__animated animate__fadeIn">
                            <div className="col-start-1 col-end-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:mb-4 flex justify-center">
                                <Image className="object-scale-down" src={product.image} alt={product.title} width={200} height={200}/>
                            </div>
                            <div className="col-start-2 col-end-4 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 bg-red-800 w-full p-4 rounded-lg bg-blue-200 relative">
                                <h1 className="title-font uppercase text-lg xs:text-md mb-2">{product.title}</h1>
                                <p className="mb-2">{product.description}</p>
                                <div className="w-40 py-2 bg-blue-400 rounded-lg absolute bottom-4 left-4"><h2 className="text-center">$ {product.price} USD</h2></div>
                                <span className="absolute bottom-0 right-0 px-2 py-1 bg-black text-white rounded-br-lg">{product.category}</span>
                            </div>
                        </article>
                        
                    }
                    {
                        (!product && !loading) && <div className="w-full product-height flex items-center justify-center">
                            <h1 className="text-center uppercase animate__animated animate__shakeX md:text-sm">UPS, producto no encontrado...</h1>
                        </div>
                    }
                </main>
            <Footer/>
        </>
    )
}

export default ProductPage;
