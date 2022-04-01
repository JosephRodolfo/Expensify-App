import { createStore } from "redux";

const add = ({ a, b }) => {
  return a + b;
};

console.log(add({ a: 1, b: 12 }));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = ({} = {}) => ({
  type: "RESET",
});

//Reducers







const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "RESET":
      return { count: (state.count = 0) };
    case "SET":
      return { count: (state.count = action.setBy) };
    default:
      return state;
  }
};

const setCount = ({ setBy = store.getState().count } = {}) => ({
  type: "SET",
  setBy,
});
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

/*
store.dispatch({
  type: "INCREMENT",
  incrementBy: 5,
});*/

store.dispatch(incrementCount({ incrementBy: 2 }));

/*
store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
});*/

store.dispatch(decrementCount({ decrementBy: 5 }));

//store.dispatch(resetCount({}))
/*store.dispatch({

  type: 'SET',
  count: 101
})*/

store.dispatch(setCount({}));

unsubscribe();
