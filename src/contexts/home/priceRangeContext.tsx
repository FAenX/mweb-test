import React, {} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { selectPriceRange } from '../../redux/home/priceRange';




type PriceRangeProps = {
    children: React.ReactNode;
};

type PriceRange = {
    priceRange: string;
    setPriceRange: (range: string) => void;
};


export const PriceRangeContext = React.createContext<PriceRange>({
    priceRange: '',
    setPriceRange: () => {}
});

export const PriceRangeProvider: React.FC<PriceRangeProps> = ({children}) => {

    const dispatch = useDispatch();
    const handleSetPriceRange =(range: string)=> {
        dispatch(selectPriceRange(range));
    }
    

    const priceRange = useSelector((state: RootState) => state.priceRange.selectedPriceRange);

    return (
        <PriceRangeContext.Provider 
            value={{
                priceRange: priceRange, 
                setPriceRange: handleSetPriceRange
            }}>
            {children}
        </PriceRangeContext.Provider>
    )
}



