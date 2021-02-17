export const actionTypes = {
    load: "entity/load"
}

export const entityReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.load:
            console.log(action);
            return {
                ...action.payload,
                data: action.payload.data[0]
            };
        default:
            return state;
    }
}