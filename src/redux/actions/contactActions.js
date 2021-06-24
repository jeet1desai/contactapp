export const addContacts = (contact) => {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
}

export const updateContacts = (contact) => {
    return {
        type: 'UPDATE_CONTACT',
        payload: contact
    }
}

export const deleteContacts = (id) => {
    return {
        type: 'DELETE_CONTACT',
        payload: id
    }
}