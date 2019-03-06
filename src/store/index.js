import configureStore from './configureStore';

// object destructuting
const {store, persistedStore } = configureStore(); // sets the store equal to a function, returning a redux store

export { persistedStore, store as default }; // persistedStore is a named export, while store is a default one