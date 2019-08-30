export const createEvent = (event) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('events').add({
            ...event,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_EVENT', event });   
        }).catch((err) => {
            dispatch({ type: 'CREATE_EVENT_ERROR', err });
        })
        
    }
};