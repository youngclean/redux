export default (reducer) => {
  let state = 0;
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());

  }
  const subcribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  return {getState, dispatch, subcribe};
}