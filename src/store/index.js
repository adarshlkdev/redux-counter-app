import { createStore } from "redux";

const INITIAL_VAL = {
    counter: 0,
    privacy: false
}

const counterReducer = (store = INITIAL_VAL, action) => {
    if(action.type === "INCREMENT"){
        return {
            ...store,
            counter : store.counter + 1,
        }
    }
    else if(action.type === "DECREMENT"){
        return {
            ...store,
            counter : store.counter - 1,
        }
    }
    else if(action.type === "ADD"){
        return {
            counter : store.counter + Number(action.payload.number),
            privacy : store.privacy
        }
    }
    else if(action.type === "SUBTRACT"){
        return {
            ...store,
            counter : store.counter - Number(action.payload.number),
        }
    }
    else if(action.type === "TOGGLE_PRIVACY"){
        return {
            ...store,
            privacy : !store.privacy,
        }
    }
    return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;

