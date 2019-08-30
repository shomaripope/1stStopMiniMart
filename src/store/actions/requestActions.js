export const requestEvent = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('posts').add({
            ...post,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'REQUEST_EVENT', post });   
        }).then(() => {
            alert("Thank you for submitting your request! We'll be in touch...!")
        }).catch((err) => {
            dispatch({ type: 'REQUEST_EVENT_ERROR', err });
        })
        
    }
};