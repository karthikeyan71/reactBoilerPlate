const something = (parameter) => (dispatch) => {
  console.log('something is called');
  dispatch({
    type: 'SHOW_APPS',
    payload: {}
  })
}

const something2 = (parameter) => (dispatch) => {
  console.log('something is called');
}

export {
  something,
  something2
}
