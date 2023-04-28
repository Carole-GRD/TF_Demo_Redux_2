import  { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

// action et reducer -> les deux en même temps


const initialState = {
    items : []
}

const itemSlice = createSlice({
    initialState,
    // name -> préfix de toutes les actions (cf: le domaine)
    name: 'item',
    reducers: {

        // Action préparé avec le reducer
        add : {
            // - Préparation de l'action (Génération d'id par exemple)
            // REMARQUE : on ne peut pas passer par redux toolkit du navigateur pour tester
            prepare : ( { name, price } ) => {
                // Envoi le payload préparé
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        price,
                        isValided: false
                    } 
                }
            },
            // - Résolution de l'action (cf: reducer)
            reducer : (state, action) => {
                const item = action.payload;
                state.items.push(item);
            }
        },

        // Action simple avec le reducer
        remove (state, action) {
            const targetId = action.payload;
            state.items = state.items.filter(item => item.id !== targetId)
        },
        
        validate (state, action) {
            const targetId = action.payload;
            const targetItem = state.items.find(item => item.id === targetId);

            if (targetItem) {
                targetItem.isValided = true;
            }
        }

    }
})



// Export des actions
export const {

    add: itemActionAdd, 
    remove: itemActionRemove, 
    validate: itemActionValidate
    
} = itemSlice.actions;

// Export du reducer
export default itemSlice.reducer;
// const itemReducer = itemSlice.reducer;
// export default itemReducer;

