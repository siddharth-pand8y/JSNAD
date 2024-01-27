# Events

- `addListener` and .`on` are same
- emitting an 'error' event will cause the event emitter to throw an exception if a listener for the error event has not been registered
- `once` - trigger an event once
- `prependListener` - add the listener to the top
- removeListerner with an empty argument for listener removes all the listeners on that event