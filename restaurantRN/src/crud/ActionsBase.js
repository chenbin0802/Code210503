import { makeActionType } from './utils/CrudUtils'

const OPERATIONS = {
  FETCH: 'FETCH'
}

const STATUS = {
  REQUEST: 'REQUEST', // action was just requested
  WORKING: 'WORKING', // action being in progress
  SUCCESS: 'SUCCESS', // successful completion
  FAILURE: 'FAILURE' // fatal failure
}

export default class ActionsBase {
  constructor (key) {
    this.fetch = this.fetch.bind(this)
    this.fetch.type = makeActionType(key, OPERATIONS.FETCH, STATUS.REQUEST)
    this.fetch.typeWorking = makeActionType(key, OPERATIONS.FETCH, STATUS.WORKING)
    this.fetch.typeSuccess = makeActionType(key, OPERATIONS.FETCH, STATUS.SUCCESS)
    this.fetch.typeFailure = makeActionType(key, OPERATIONS.FETCH, STATUS.FAILURE)
  }

  fetch (payload) {
    console.debug('fetch function:', payload)
    return {
      type: this.fetch.type,
      payload
    }
  }
}
