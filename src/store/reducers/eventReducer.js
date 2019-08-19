
const initState = {
    events: [
        // {id: '1', title: 'lyfe cannabis apparel debut', author: 'Ari Pope', content: 'blah blah blah blah', date: 9/18/2019},
        // {id: '2', title: 'lyfe cannabis apparel showcase', author: 'Ari Pope', content: 'blah blah blah blah', date: 9/18/2019},
        // {id: '3', title: 'lyfe cannabis apparel sales', author: 'Ari Pope', content: 'blah blah blah blah', date: 9/18/2019}
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