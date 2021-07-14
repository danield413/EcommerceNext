import Head from 'next/head'
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { changeProducts, initialProducts } from '../store/products';
import Product from '../components/Product';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import FilteredProducts from '../components/FilteredProducts';

export default function Home({ categories, allProducts }) {

  const { currentCategorie, products, loading, isSearching } = useSelector( state => state.products );
  const dispatch = useDispatch();
  
  const getData = useCallback( async () => {
    if(currentCategorie.length > 0) {
      const { data } = await axios.get(`https://fakestoreapi.com/products/category/${currentCategorie}`);
      dispatch( changeProducts( data ) );
    }
  }, [currentCategorie, dispatch])

  useEffect(() => {
    
    getData();

  }, [getData])

  useEffect(() => {
    dispatch( initialProducts( allProducts ) )
  }, [dispatch, allProducts])

  return (
    <>
      <Head>
          <title>Ecommerce Colombia</title>
      </Head>
      <Navbar />
      <main className="flex flex-col px-36 lg:px-2 animate__animated animate__fadeIn pt-16 min-h-screen">
        <Categories data={ categories }/>
        <div>

          {
          !isSearching ?
            currentCategorie !== '' 
            ? <p className="leading-none tracking-tighter title-font text-2xl text-center">{currentCategorie}</p>
            : <p className="leading-none tracking-tighter title-font text-2xl text-center">Todos los productos</p>
          : null
          }
          
          {(loading && currentCategorie !== '') && <Spinner />}

          <section>
            
            {

              isSearching 
              ? <FilteredProducts />
              : 
              <>

                {currentCategorie === '' && allProducts.map((product) => {
                  return <Product product={product} key={product.id} />
                })}
              
                {(products && products.length > 0 && !loading) && products.map((product) => {
                return <Product product={product} key={product.id} />
                }) } 

              </>
            }
            
          </section>
          
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps(){

  const prom1 = axios.get('https://fakestoreapi.com/products/categories');
  const prom2 = axios.get('https://fakestoreapi.com/products');

  const values = await Promise.all([prom1, prom2]);

  return {
      props: {
        categories: values[0].data,
        allProducts: values[1].data
      }
  }
}