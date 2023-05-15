
import { makeAutoObservable } from 'mobx'
class CounterStore {
    count = 10
    constructor() {
        makeAutoObservable(this)
    }
    //action函数，修改数据
    addCount = (data: number) => {
        this.count += data
    }
    decrement = (data: number) => {
        this.count -= data
    }
    //mobx中的计算属性
    get count2() {
        return this.count * 2
    }


}

const counterStore = new CounterStore()

export default counterStore 