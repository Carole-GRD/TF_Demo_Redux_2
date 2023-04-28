
import { configureStore } from '@reduxjs/toolkit';
import presenceReducer from './reducers/presence.reducer';
import itemSlice from './slice/item.slice';
// import itemReducer from './slice/item.slice';


const store = configureStore({
    reducer: {
        presence: presenceReducer,
        item: itemSlice,
        // item: itemReducer
    },
    devTools: import.meta.env.dev,
    preloadedState: JSON.parse(localStorage.getItem('state') ?? '{}')
})

store.subscribe(()=> {
    localStorage.setItem('state', JSON.stringify(store.getState()));
    // localStorage.setItem('state', JSON.stringify({item: store.getState().item}));
})

export default store;