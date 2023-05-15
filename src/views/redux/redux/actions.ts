
import { INCREMENT, DECREMENT } from './constant'

//异步action
export const createIncrementAction = (data: number) => {
    return (dispatch: any) => {
        new Promise(resolve => {
            resolve('')
        }).then(res => {
            dispatch({ type: INCREMENT, data })
        })
    }
}
export const createDecrementAction = (data: number) => ({ type: DECREMENT, data })
