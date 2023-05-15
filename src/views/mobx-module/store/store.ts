import React from 'react'
import counterStore from './counter.store'
import personStore from './person.store.ts'

//代理模式，工厂模式
class RootStore {
    public counterStore: any
    public personStore: any
    constructor() {
        this.counterStore = counterStore
        this.personStore = personStore
    }
}
//直接导出就可以使用
const store = new RootStore()



//采用hook的方式导出使用
const context = React.createContext(store)
const useStore = () => React.useContext(context)
export default useStore