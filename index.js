import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import sinon from "sinon";

function setupIntegrationTest(
  reducer,
  reducerKey,
  middleware = [thunk],
  otherReducers = {}
) {
  const dispatchSpy = sinon.stub().callsFake(() => ({}));
  const reducerSpy = (state, action) => dispatchSpy(action);
  const combinedReducers = combineReducers({
    reducerSpy,
    [reducerKey]: reducer,
    ...otherReducers
  });

  const store = createStore(combinedReducers, applyMiddleware(...middleware));

  return { store, dispatchSpy };
}

export default setupIntegrationTest;
