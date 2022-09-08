import {ACTIONS} from './actionType'

export const handleSubstract = () => {
    return({
      type: ACTIONS.SUBTRACT
    })
  }

  export const handleReset = () => {
    return({
      type: ACTIONS.RESET
    })
  }

   export const handleAdd = () => {
    return({
      type: ACTIONS.ADD
    })
  }

   export const handleAddNumber = (amount) => {
    return({
      type: ACTIONS.ADD_NUMBER ,
      payload: amount
    })
  }

   export const toggleAuth = () => {
    return({
      type: ACTIONS.TOGGLE_AUTH
      
    })
  }