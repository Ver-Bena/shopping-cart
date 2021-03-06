import Constant from '../constant';

export default {
    [Constant.LOAD_POKEMON] : (store, payload) => {
        store.commit(Constant.LOAD_POKEMON, payload);
    },
    [Constant.SEARCH_POKEMON] : (store, payload) => {
        store.commit(Constant.SEARCH_POKEMON, payload);
    },
    [Constant.ADD_TO_CART] : (store, payload) => {
        store.commit(Constant.ADD_TO_CART, payload);
    },
    [Constant.DELETE_AT_CART] : (store, payload) => {
        store.commit(Constant.DELETE_AT_CART, payload);
    },
    [Constant.CHECKOUT] : (store, payload) => {
        store.commit(Constant.CHECKOUT, payload);
    },
    [Constant.TOO_MUCH_QUANTITY] : (store, payload) => {
        store.commit(Constant.TOO_MUCH_QUANTITY, payload);
    },
    [Constant.TOO_LOW_QUANTITY] : (store, payload) => {
        store.commit(Constant.TOO_LOW_QUANTITY, payload);
    },
    [Constant.RIGHT_QUANTITY] : (store, payload) => {
        store.commit(Constant.RIGHT_QUANTITY, payload);
    },
    [Constant.TOGGLE_POSE] : (store, payload) => {
        store.commit(Constant.TOGGLE_POSE, payload);
    },
    [Constant.CHANGE_OFFSET] : (store, payload) => {
        store.commit(Constant.CHANGE_OFFSET, payload);
    }
}