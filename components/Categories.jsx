import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { changeCategorie } from '../store/products';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

const Categories = ({data}) => {

    const dispatch = useDispatch();
    const { currentCategorie } = useSelector(state => state.products);
    const [openDropDown, setOpenDropDown] = useState(false);

    const handleChangeCategorie = (categorie) => {
        setOpenDropDown(false);
        dispatch( changeCategorie(categorie) );
    }

    return (
        <header className="h-28 relative flex justify-center items-center">

            <div>
                <div className="p-2 rounded-lg w-60 h-10 bg-gray-300">
                    <button onClick={() => setOpenDropDown(!openDropDown)} className="w-full flex justify-between items-center  h-full border-none lg:text-sm">
                        <span>Categorías</span>
                        {!openDropDown ? <BsCaretDownFill className="transition" /> : <BsCaretUpFill className="transition" />}
                    </button>
                </div>
                <div className={`w-60 rounded absolute mt-1 bg-gray-300 p-1 z-50 transition ease-in ${!openDropDown ? 'hidden' : 'block'}`}>

                    <div onClick={() => handleChangeCategorie('')} className={`w-full h-10 bg-gray-300 rounded my-1 flex justify-center items-center cursor-pointer hover:bg-gray-400 transition lg:text-sm ${currentCategorie === '' && 'bg-gray-400'}`}>
                        Todos los productos
                    </div>

                    {data && data.map((categorie, index) => (
                        <div onClick={() => handleChangeCategorie(categorie)} key={index} className={`w-full h-10 bg-gray-300 rounded my-1 flex justify-center items-center cursor-pointer hover:bg-gray-400 transition lg:text-sm ${currentCategorie === categorie && 'bg-gray-400'}`}>
                            {categorie}
                        </div>
                    ))}
                </div> 
            </div>

        </header>
    )
}

export default Categories;

