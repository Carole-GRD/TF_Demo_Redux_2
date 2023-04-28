
import { createReducer } from '@reduxjs/toolkit'
import { presenceActionAddPerson, presenceActionInvalidate, presenceActionRemovePerson, presenceActionValidate } from '../actions/presence.action'


// "immer" est présent dans le toolkit -> on ne doit pas l'installer !

const initialState = {
    people: []
}

const presenceReducer = createReducer(initialState, builder => {
    builder 
        .addCase(presenceActionAddPerson, (state, action) => {
            // Récupération des données "payload" de l'action
            const person = action.payload;
            // Ajout de la personne dans la liste
            state.people.push(person);
        })
        .addCase(presenceActionRemovePerson, (state, action) => {
            const targetId = action.payload;

            state.people = state.people.filter(p => p.id !== targetId)
        })
        .addCase(presenceActionValidate, (state, action) => {
            const targetId = action.payload;
            const person = state.people.find(p => p.id === targetId);

            if (person) {
                person.isPresent = true;
            }
        })
        .addCase(presenceActionInvalidate, (state, action) => {
            const targetId = action.payload;
            const person = state.people.find(p => p.id === targetId);

            if (person) {
                person.isPresent = false;
            }
        })
})


export default presenceReducer;


// REMARQUE : en fonction de la manière dont on utilise l'action :
    // presenceActionRemovePerson( 42 )            -> action.payload
    // presenceActionRemovePerson( {id: 42} )      -> action.payload.id
