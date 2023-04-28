import { useSelector, useDispatch } from 'react-redux'
import { presenceActionAddPerson } from '../../store/actions/presence.action'
import { itemActionAdd } from '../../store/slice/item.slice'


const PersonPresenceRead = () => {

    const people = useSelector(state => state.presence.people)

    return (
        
        <ul>
            {people.map(person => (
                <li key={person.id}>
                    {person.firstname} {person.lastname} {person.isPresent ? 'V' : 'X'}
                </li>
            ))}
        </ul>
       
    )
}


const PersonPresenceEvent = () => {

    const dispatch = useDispatch();

    const handleAddZaza = () => {
        const zaza = { firstname: 'Zaza', lastname: 'Vanderquack '};
        dispatch( presenceActionAddPerson(zaza));
    }

    const handleAddDella = () => {
     
        dispatch( presenceActionAddPerson( { firstname: 'Della', lastname: 'Duck' } ) );

        // dispatch(itemActionAdd({ name: 'Test', price: 42 }))   // ->  pour tester
    }

    return (
        <>
        {/* TODO : Replace with a form */}
            <button onClick={handleAddZaza}>Ajouter Zaza</button>
            <button onClick={handleAddDella}>Ajouter Della</button>
        </>
    )
}


const PersonPresence = () => {

    return (
        <>
            <PersonPresenceRead />
            <PersonPresenceEvent />
        
        </>
    )
}

export default PersonPresence;