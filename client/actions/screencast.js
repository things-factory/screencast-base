export const UPDATE_SCREENCAST_SERVICES = 'UPDATE_SCREENCAST_SERVICES'

export const updateScreencastServices = ({ services }) => dispatch => {
  dispatch({
    type: UPDATE_SCREENCAST_SERVICES,
    services
  })
}
