export const ADD_SCREENCAST_SERVICES = 'ADD_SCREENCAST_SERVICES'
export const CHANGE_SCREENCAST_SERVICES = 'CHANGE_SCREENCAST_SERVICES'
export const REMOVE_SCREENCAST_SERVICES = 'REMOVE_SCREENCAST_SERVICES'

export const addScreencastServices = ({ service }) => dispatch => {
  dispatch({
    type: ADD_SCREENCAST_SERVICES,
    service
  })
}

export const changeScreencastServices = ({ service }) => dispatch => {
  dispatch({
    type: CHANGE_SCREENCAST_SERVICES,
    service
  })
}

export const removeScreencastServices = ({ service }) => dispatch => {
  dispatch({
    type: REMOVE_SCREENCAST_SERVICES,
    service
  })
}
