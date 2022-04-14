import { makeObservable, observable, action } from 'mobx'

class AppStore {
  constructor() {
    makeObservable(this, {
      tabIndex: observable,
      rank: observable,
      initData: observable,
      idViewIndex: observable,
      commonSetData: action,
    })
  }
  tabIndex = 0
  rank = {}
  initData = {}
  idViewIndex = 0
  commonSetData(payload) {
    const { key, value } = payload
    this[key] = value
  }
  get idViewIndexInfo() {
    return this.idViewIndex
  }
}

const store = new AppStore()
export default store
