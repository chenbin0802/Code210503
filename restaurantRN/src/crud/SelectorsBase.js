
export default class SelectorBase {
  constructor(key){
    this.key = key
  }

  getModuleState = state => state.get(this.key).toJS();
}