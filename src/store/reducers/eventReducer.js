
const initState = {
    events: [
        // {id: '', title: '', author: '', content: '', date: 9/18/2019},
        // {id: '2', title: '', author: '', content: '', date: 9/18/2019},
        // {id: '3', title: '', author: '', content: '', date: 9/18/2019}
    ]
}

    const eventReducer = (state = initState, action) => {
        switch (action.type) {
            case 'CREATE_EVENT':
                console.log('created event', action.event);
                return state;
            case 'CREATE_PROJECT_ERROR':
                console.log('created event error', action.err);
                return state;
            default: 
                return state;
        }
    }

export default eventReducer