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

const saveState = (state) => {
  try {
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

export { loadState, saveState, removeState };