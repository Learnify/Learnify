const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  }
  catch (err) {
    return {};
  }
};

const loadAuthReducer = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState).authentication;
  }
  catch (err) {
    return {};
  }
};

const loadRegistrationReducer = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState).registration;
  }
  catch (err) {
    return {};
  }
};

const loadLoggedIn = () => {
  try {
    const serializedToken = JSON.parse(localStorage.getItem('state')).authentication.loggedIn;
    if (serializedToken === null) {
      return undefined;
    }
    return serializedToken;
  }
  catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    if (JSON.parse(localStorage.getItem('state'))) {
      removeState();
    }
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  }
  catch (err) {
    return undefined;
  }
};

const removeState = () => {
  try {
    localStorage.removeItem('state');
  }
  catch (err) {

  }
};

const clearLocalStorage = () => {
  localStorage.clear();
};

export { loadState, saveState, removeState, clearLocalStorage, loadLoggedIn, loadAuthReducer, loadRegistrationReducer };