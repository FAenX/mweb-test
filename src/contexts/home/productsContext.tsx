import React, {} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux'
import { Product } from '../../types/home';
import { setProducts } from '../../redux/products';






  
type ProductProps = {
    children: React.ReactNode;
};

type Products = {
    products: Product[] | [];
    setProducts: (products: Product[]) => void;
};


export const ProductsContext = React.createContext<Products>({
    products: [],
    setProducts: () => {}
});

export const ProductsProvider: React.FC<ProductProps> = ({children}) => {

    const dispatch = useDispatch();
    const handleSetProducts =(products: Product[])=> {
        dispatch(setProducts(products));
    }
    

    const providers = useSelector((state: RootState) => state.providers.providers);
    const selectedProvider = useSelector((state: RootState)=> state.providers.selectedProvider)
    const products = useSelector((state: RootState)=> state.products.products)


    React.useEffect(() => {
        const products = providers && providers.length> 0 && providers.filter(provider=>provider.provider === selectedProvider)[0].products
        console.log(selectedProvider)
        console.log(products)
        handleSetProducts(products && products || []);
    }, [selectedProvider]);


    return (
        <ProductsContext.Provider 
            value={{
                products: products, 
                setProducts:  handleSetProducts
            }}>
            {children}
        </ProductsContext.Provider>
    )
}


