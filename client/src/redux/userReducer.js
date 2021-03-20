import createReducer from './ReducerUtils'
import { produce } from 'immer'

const initialState = {
    user: {
        userName: ""
    }
}

const userSetFunctions = {
    setUserName(state, action) {
        state.user.userName = action.payload;
    },
}


export default produce((state, action) => createReducer(state, action, userSetFunctions), initialState);