import { configureStore } from '@reduxjs/toolkit'
import campaignsReducer from './home/campaigns'
import providersReducer from './home/providers'
import productsReducer from './home/products'
import priceRangeReducer from './home/priceRange'

export const store = configureStore({
    reducer: {
        campaigns: campaignsReducer,
        providers: providersReducer,
        products: productsReducer,
        priceRange: priceRangeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch