
export default class SelectorBase {
  constructor(key){
    this.key = key
  }

  getModuleState = state => {
    return state[this.key];
  }
}