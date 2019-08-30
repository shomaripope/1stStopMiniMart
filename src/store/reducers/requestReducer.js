const initState = {
    posts: [
        // {id: '', title: '', author: '', content: '', date: 9/18/2019},
        // {id: '2', title: '', author: '', content: '', date: 9/18/2019},
        // {id: '3', title: '', author: '', content: '', date: 9/18/2019}
    ]
}

    const requestReducer = (state = initState, action) => {
        switch (action.type) {
            case 'REQUEST_EVENT':
                console.log('created event', action.post);
                return state;
            case 'REQUEST_PROJECT_ERROR':
                console.log('created post error', action.err);
                return state;
            default: 
                return state;
        }
    }

export default requestReducer