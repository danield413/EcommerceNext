import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        currentCategorie: '',
        allProducts: [],
        products: [],
        loading: false,
        cart: [],
        isSearching: false,
        search: ''
    },
    reducers: {
        changeCategorie: (state, action) => {
            state.currentCategorie = action.payload;
            state.loading = true;
            state.isSearching = false;
            state.search = '';
        },
        initialProducts: (state, action) => {
            state.allProducts = action.payload;
        } ,
        changeProducts: (state, action) => {
            state.products = action.payload;
            state.loading = false;
        },
        changeSearchProducts: (state, action) => {
            if(action.payload === ''){
                state.isSearching = false;
                return;     
            }
            state.isSearching = true;
            state.search = action.payload;
        },
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload]
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter( product => product.id !== action.payload)
        },
        cleanCart : (state) => {
            state.cart = [];
        },
    },
    extraReducers: {
        
    }
})

export const { 
    changeCategorie,
    initialProducts,
    changeSearchProducts,
    changeProducts,
    addToCart, 
    removeFromCart, 
    leanCart 
} = productsSlice.actions;
export default productsSlice.reducer;
