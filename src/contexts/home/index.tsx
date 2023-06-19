import React, {useContext, useReducer, useState} from 'react';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux'
import { Company } from '../../types/home';
import { getAllCompanies } from '../../adapters';




interface CompaniesState {
    companies: Company[];
}

const initialState: CompaniesState  = {
    companies: []
};


const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setCompanies: (state, action: PayloadAction<Company[]>) => {
        state.companies = action.payload
    },
  },
});


const { setCompanies } = companiesSlice.actions;

  
type ProviderProps = {
    children: React.ReactNode;
};

type Companies = {
    companies: Company[] | [];
    setCompanies: (homePageContent: Company[]) => void;
};


export const CompaniesContext = React.createContext<Companies>({
    companies: [],
    setCompanies: () => {}
});

export const CompaniesProvider: React.FC<ProviderProps> = ({children}) => {

    const dispatch = useDispatch();
    const handleSetCompanies =(companies: Company[])=> {
        dispatch(setCompanies(companies));
    }
    

    const companies = useSelector((state: RootState) => state.companies.companies);

    React.useEffect(() => {
        
            (async()=> {
                const data = await getAllCompanies();
                if (data.error) {
                    // setNotification({message: data.message, severity: 'error'})
                    return
                }
                handleSetCompanies(data);
              
            }
            )();

        
      
    }, []);


    return (
        <CompaniesContext.Provider 
            value={{
                companies: companies, 
                setCompanies:  handleSetCompanies
            }}>
            {children}
        </CompaniesContext.Provider>
    )
}


export default companiesSlice.reducer;