import React, {} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Product } from '../../types/home';
import { setProducts } from '../../redux/home/products';
import { RootState } from '../../redux';







  
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
    const priceRange = useSelector((state: RootState)=> state.priceRange.selectedPriceRange)


    React.useEffect(() => {
        const products = providers && providers.length> 0 && providers
            .filter(provider=>provider.provider === selectedProvider)[0]
            .products

        console.log(priceRange)
            
        if (priceRange && priceRange.length < 1){
            handleSetProducts(products && products || []);
        }

        if (priceRange && priceRange === "R0 - R699"){
            const fByRange = products && products.filter(product=>{
                return product.productRate <= 699
            })
            handleSetProducts(fByRange && fByRange || []);
        }

        if (priceRange && priceRange === "R700 - R999"){
            const fByRange = products && products.filter(product=>{
                return product.productRate <= 999
            })
            handleSetProducts(fByRange && fByRange || []);
        }

        if (priceRange && priceRange === "R1000+"){
            const fByRange = products && products.filter(product=>{
                return product.productRate >= 1000
            })
            handleSetProducts(fByRange && fByRange || []);
        }

        

           
        
    }, [selectedProvider, priceRange]);


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


