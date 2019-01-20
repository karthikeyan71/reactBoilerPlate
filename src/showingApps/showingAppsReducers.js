import { handle } from 'redux-pack';

const initialState = {
  loding: false,
  data: [],
  failed: false,
}

const showingAppsReducer =  (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'SHOW_APPS':
      console.log('came inside');
      return handle(state, action, {
        start: (prevState => {
          console.log('came inside the start method');
          return {
            ...prevState,
            loding: true,
            failed: false,
          }
        }),
        success: (prevState => {
          console.log('came inside the success method');
            return {
              ...prevState,
              loding: false,
              failed: false,
            }
        }),
        failure: (prevState => {
          console.log('came inside the failure method');
            return {
              ...prevState,
              loding: false,
              failed: true,
            }
        }),
      });
      break;
    default:
      console.log('Printing the default case');
  }

  return state;

}

export default showingAppsReducer;
