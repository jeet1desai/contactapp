const initialState = [
    {
        id: 0,
        name: 'desai jeet',
        email: 'jeet@gmail.com',
        phone: 1111111111
    },
    {
        id: 1,
        name: 'desai jeet2',
        email: 'jeet2@gmail.com',
        phone: 2222222222
    }
]




const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            state = [...state, action.payload];
            return state;

        case 'UPDATE_CONTACT':
            const updateContact = state.map((contact) => contact.id === action.payload.id ? action.payload : contact);
            state = updateContact;
            return state;

        case 'DELETE_CONTACT':
            const filterContact = state.filter((contact)=> contact.id !== action.payload && contact);
            state = filterContact;
            return state;

        default: return state;
    }
}

export default contactReducer;