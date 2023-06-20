import { configureStore } from '@reduxjs/toolkit'
import campaignsReducer from './campaigns'
import providersReducer from './providers'
import productsReducer from './products'

export const store = configureStore({
    reducer: {
        campaigns: campaignsReducer,
        providers: providersReducer,
        products: productsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch