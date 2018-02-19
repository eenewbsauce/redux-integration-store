import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import sinon from 'sinon';

function setupIntegrationTest(reducer, reducerKey) {
    const dispatchSpy = sinon.stub();
    const reducerSpy = (state, action) => dispatchSpy(action);
    const combinedReducers = combineReducers({
        reducerSpy,
        [reducerKey]: reducer,
    });

    const store = createStore(combinedReducers, applyMiddleware(thunk));

    return { store, dispatchSpy };
}

export default setupIntegrationTest;
