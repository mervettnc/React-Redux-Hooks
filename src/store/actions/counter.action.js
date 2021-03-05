import { createAction } from "@reduxjs/toolkit"

export const creators = {
  increment: createAction('counter/increment')
}

export const actions = {
  increment: (value) => dispatch => {
    
    dispatch({
      type: creators.increment,
      payload: value
    })
  }
}

export default actions