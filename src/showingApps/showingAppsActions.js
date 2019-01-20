const something = (parameter) => (dispatch, getState, api) => {
  console.log('something is called');
  console.log(getState());
  console.log(api);
  dispatch({
    type: 'SHOW_APPS',
    payload: {},
    promise: api.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data)
  })
}

const something2 = (parameter) => (dispatch) => {
  console.log('something is called');
}

export {
  something,
  something2
}
