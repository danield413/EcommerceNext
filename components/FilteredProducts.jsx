import { useSelector } from "react-redux"
import { filter } from "../helpers/filter";
import Product from "./Product"

const FilteredProducts = () => {

    const { search, allProducts } = useSelector(state => state.products);
    
    return (
        <>
            <h2>Búsqueda</h2>
            {
                allProducts.map(product => {
                    const isInSearch = filter(product.title, search);
                    if(isInSearch){
                        return <Product product={product} key={product.id} />
                    }
                })
            }
        </>
    )
}

export default FilteredProducts
