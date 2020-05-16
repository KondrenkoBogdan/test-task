const DAUN = "DAUN";

let initialState = {
    name: "Ksenia"
}

const secondPartReducer = (state=initialState, action) => {

    let stateCopy={...state}

    switch(action.type){
        case DAUN:
        default: return stateCopy;
    }
}

export default secondPartReducer;