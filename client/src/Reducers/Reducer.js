import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    DELETE_ALL,
    CONNECT_USER,
    DECONNECT_USER
} from "../Constants/actions";

let stateInit;
// stocke des données pendant la session
if (sessionStorage.getItem("basket")) {
    stateInit = JSON.parse(sessionStorage.getItem("basket"));

} else {
    stateInit = {
        totalPrice: 0,
        products: [],
        donateurId: null,
    };
}

const reducer = (state = stateInit, action = {}) => {
    console.log(state);

    switch (action.type) {

        case ADD_PRODUCT:
            return {
                ...state,
                totalPrice: parseFloat(state.totalPrice) + parseFloat(action.products.price),
                products: [...state.products, action.products],
                quantite: state.quantite + 1,
            };

        case DELETE_PRODUCT:
            let total = 0;
            let products = [...state.products];
            products.splice(action.prodId, 1);

            for (const prod of products) {
                total += parseFloat(prod.price);
            }

            return {
                ...state,
                totalPrice: total,
                products: [...products],
            };

        case DELETE_ALL:
            return {
                ...state,
                totalPrice: 0,
                products: [],
            };

        case CONNECT_USER:
            return {
                ...state,
                donateurId: action.id,
            };
        case DECONNECT_USER:
            return {
                ...state,
                donateurId: null,
            };
        default:
            return state;
    }
};

export default reducer;