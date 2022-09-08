import {ACTIONS} from '../actions/actionType'

const countReducer =(state=0, action) => {
    if (action.type === ACTIONS.SUBTRACT ){
        return state - 1
    }

    if (action.type ===ACTIONS.ADD ){
        return state + 1
    }

    if (action.type ===ACTIONS.RESET ){
        return state = 0
    }

    if (action.type ===ACTIONS.ADD_NUMBER ){
        return state + action.payload
    }

    return state;
}

export default countReducer;