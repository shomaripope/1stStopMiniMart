export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() =>{
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).then(() => {
            alert("Login Success!")
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'})
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) =>{
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).then(() => {
            alert("Thank You for signinig up! We'll be in touch...!")
        }).then(() => {
            dispatch(signOut())
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}