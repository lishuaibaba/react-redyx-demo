import { ADD_PERSON } from "../constant";
const initState = [{ id: "001", name: "zhang", age: "18" }]
export default function personReducer(preState = initState, action) {
    const { type, data } = action;
    switch (ADD_PERSON) {
        case type:
            return [data, ...preState]
        default:
            return preState;
    }
}   