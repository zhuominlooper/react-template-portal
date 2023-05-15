import { INCREMENT, DECREMENT, ADDPERSON } from "./constant";
//异步action
export const increment = (data: number) => {
    return (dispatch: any) => {
        new Promise(resolve => {
            resolve('')
        }).then(res => {
            dispatch({ type: INCREMENT, data })
        })
    }
}

export const decrement = (data: number) => {
    return {
        type: DECREMENT,
        data,
    };
};

export const addPerson = (data: any) => {
    return {
        type: ADDPERSON,
        data,
    }
}

