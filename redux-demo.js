const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1,
		}
	}
	return state;
}

const store = redux.createStore(counterReducer);

const counterSubscriber = _ => {
	const latestStore = store.getState();
	console.log(latestStore)
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' })
