/**
 * Selector Base for all Selectors
 */
export default class SelectorBase {
  constructor(key){
    this.key = key
  }

  // return the state data by key
  getModuleState = state => {
    return state[this.key];
  }
}