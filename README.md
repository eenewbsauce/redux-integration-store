# redux-integration-store

The basic idea behind this module is to enable users to write integration tests for their Redux-connected React components

## Usage

```
    import setupIntegrationTest from 'redux-integration-store';

    import SomeReduxConnectedComponent from './Component';
    import reducer from './reducer/';

    describe('Test Suite', () => {

        let store;
        let dispatchSpy;

        beforeEach(() => {
            ({ store, dispatchSpy } = setupIntegrationTest(reducer, 'topLevelReducerKey'));
        });

        test('should mount', () => {
            (<Provider store={store}>
                <SomeReduxConnectedComponent />
            </Provider>);
        })

    })

```

## Feedback

If something isn't working for you, please let me know by opening an issue on Github.

If you like this module, please STAR on Github!

