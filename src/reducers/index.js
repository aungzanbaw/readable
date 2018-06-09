import { EVERY, SOME  } from '../actions'
// import { combineReducers } from 'redux'
// createStore, applyMiddleware, compose
const initialState = {}

function blar(state = initialState, action){
    const {some, every} = action
    switch(action.type){
        case EVERY :
            return {
                ...state,
                prop: 'every'
            }
        case SOME :
            return 'some'
        default:
            return state
    }
}
export default blar
// export default combineReducers({
//     users,
//     blar
// })