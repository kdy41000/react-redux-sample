import { combineReducers } from "redux";
import commentsReducer from "./comments/reducer";
import subscribersReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";

const rootReducer = combineReducers({
    views : viewsReducer,
    subscribers : subscribersReducer,
    comments: commentsReducer
})

export default rootReducer