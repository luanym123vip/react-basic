import React from "react";
const initState = {
    users: [
        { id: '1', name: 'Dieen' },
        { id: '2', name: 'Duynh' },
        { id: '3', name: 'Duynh' },
    ]
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            console.log('DELETE_USER')
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)

            return {
                // .. state là để coppy hết state lại, (,users) dùng để ghi đè users mới lên users cũ
                ...state, users
            };

        case 'ADD_USER':
            let id = Math.floor(Math.random() * 1001);
            let user = {
                id: id,
                name: `random - ${id}`
            }
            return {
                ...state, users: [...state.users, user]
            };
        default:
            return state;
    }


}
export default rootReducer;