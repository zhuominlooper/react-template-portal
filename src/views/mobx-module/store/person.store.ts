import { makeAutoObservable } from 'mobx'
class PersonStore {
    personInfo = [{
        name: 'looper'
    }]
    constructor() {
        makeAutoObservable(this)
    }
    //action函数，修改数据
    addPerson = (data: { name: string }) => {
        this.personInfo.push(data)
    }
    updatePerson = (data: { name: string }) => {
        this.personInfo[0] = data
    }
}

const personStore = new PersonStore()

export default personStore 