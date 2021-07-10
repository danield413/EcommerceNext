import { useSelector } from "react-redux"


const useReduxStore = () => {
    const { cart } = useSelector( state => state.products );
    const { uid } = useSelector( state => state.auth );

    const verifyProduct = ( productId ) => {
        const exists = cart.find( product => product.id === productId );
        return exists;
    }

    const verifyAuth = () => {
        const isLogged = uid ? true : false;
        return isLogged;
    }

    return {
        verifyProduct,
        verifyAuth
    }

}

export default useReduxStore;