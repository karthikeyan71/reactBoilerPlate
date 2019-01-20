

const showingAppsReducer =  (state = [], action) => {
  const { type, payload } = action;

  switch(type) {
    case 'SHOW_APPS':
      console.log('came inside');
      return state;
      break;
    default:
      console.log('Printing the default case');
  }

  return state;

}

export default showingAppsReducer;
