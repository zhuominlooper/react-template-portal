

import { DECREMENT, INCREMENT, ADDPERSON } from "./constant";
const initState = 0; //初始化状态
function increment(preState = initState, action: { type: string, data: number }) {
    const { type, data } = action;
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}

const initPerson = [{ name: 'looper' }]
function personReducer(preState = initPerson, action: { type: string, data: { name: string } }) {
    const { type, data } = action;
    switch (type) {
        case ADDPERSON:
            preState.push(data)
            return [...preState]
        default:
            return preState
    }
}
export { increment, personReducer }



