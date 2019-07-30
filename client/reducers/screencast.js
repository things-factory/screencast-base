import { UPDATE_SCREENCAST_SERVICES } from '../actions/screencast'

const INITIAL_STATE = {
  services: []
}

const screencast = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SCREENCAST_SERVICES:
      return {
        ...state,
        services: [...action.services]
      }

    default:
      return state
  }
}

export default screencast
