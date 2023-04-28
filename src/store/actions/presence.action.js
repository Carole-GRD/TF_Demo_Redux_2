
import { createAction } from '@reduxjs/toolkit'

// pnpm i nanoid
import { nanoid } from 'nanoid'


export const presenceActionAddPerson = createAction('presence/addPerson', ({firstname, lastname}) => {
    // Envoi le payload préparé => Génération de l'id
    return {
        payload: {
            id: nanoid(),
            firstname,
            lastname,
            isPresent: false
        }
    }
})


export const presenceActionRemovePerson = createAction('presence/removePerson')


export const presenceActionValidate = createAction('presence/validate')


export const presenceActionInvalidate = createAction('presence/invalidate')