import { createStore, combineReducers} from "redux";
import FirstPageReducer from "./FirstPageReducer";
import secondPartReducer from "./secondPartReducer";
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    firstPage: FirstPageReducer,
    secondPage: secondPartReducer,
    form: formReducer
});

const store = createStore(reducers);

export default store;