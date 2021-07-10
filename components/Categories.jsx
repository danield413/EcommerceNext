import { useDispatch, useSelector } from "react-redux"
import { changeCategorie } from '../store/products';
import React from 'react';

const Categories = ({data}) => {

    const dispatch = useDispatch();
    const { currentCategorie } = useSelector(state => state.products);

    const handleChangeCategorie = (categorie) => {
        dispatch( changeCategorie(categorie) )
    }

    return (
        <aside className="h-48">
            <h1 className="mt-2 text-xl text-center">Categorias</h1>
                        <button 
                            className={`bg-gray-200 mb-4 w-60 mx-2 px-4 py-2 mt-4 rounded-lg border-2 text-gray-500 border-blue-100 hover:border-blue-500 transition ${ currentCategorie ===  '' ? 'border-blue-500 text-gray-900' : ''}`}
                            onClick={() => handleChangeCategorie('')}
                        >Todos los productos</button>
                {
                    data && data.map(( categorie, index) => (
                        <button 
                            key={index}
                            className={`bg-gray-200 mb-4 w-60 mx-2 px-4 py-2 rounded-lg border-2 text-gray-500 border-blue-100 hover:border-blue-500 transition ${categorie === currentCategorie ? 'border-blue-500 text-gray-900' : ''}`}
                            onClick={() => handleChangeCategorie(categorie)}
                        >{categorie}</button>
                    ))
                }

        </aside>
    )
}

export default Categories;

