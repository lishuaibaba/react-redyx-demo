import { legacy_createStore as createStore,applyMiddleware,combineReducers } from "redux";
import countReducer from "./reducers/reducer"
import personReducer from "./reducers/person"
import thunk from "redux-thunk"

const allReducer = combineReducers(
    {
        count:countReducer,
        personAll:personReducer
    }
)

export default createStore(allReducer,applyMiddleware(thunk));