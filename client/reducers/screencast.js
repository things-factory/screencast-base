import {
  ADD_SCREENCAST_SERVICES,
  CHANGE_SCREENCAST_SERVICES,
  REMOVE_SCREENCAST_SERVICES,
  UPDATE_CURRENT_SCREENCAST_SERVICE
} from '../actions/screencast'

const INITIAL_STATE = {
  services: [],
  currentService: {}
}

const screencast = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SCREENCAST_SERVICES:
      var services = [...state.services].concat(
        state.services.find(s => s.name == action.service.name) ? [] : action.service
      )

      return {
        ...state,
        services
      }

    case CHANGE_SCREENCAST_SERVICES:
      var filtered = state.services.filter(s => s.name != action.service.name)
      return {
        ...state,
        services: [...filtered, action.service]
      }
    case REMOVE_SCREENCAST_SERVICES:
      return {
        ...state,
        services: [...state.services.filter(s => s.name == action.service.name)]
      }

    case UPDATE_CURRENT_SCREENCAST_SERVICE:
      return {
        ...state,
        currentService: action.service
      }

    default:
      return state
  }
}

export default screencast
