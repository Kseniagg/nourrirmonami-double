import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    DELETE_ALL,
    CONNECT_USER,
    DECONNECT_USER,
    GET_ORDER
} from "../Constants/actions";

let stateInit;

if (sessionStorage.getItem("basket")) {
    stateInit = JSON.parse(sessionStorage.getItem("basket"));

} else {
    stateInit = {
        // montant du panier
        prixFinal: 0,
        // ajout des produits dans un tableau pour les afficher
        products: [],
        // récupération de l'id de l'utilisateur
        idDonateur: null,

        quantite: 0,
    };
}

const reducer = (state = stateInit, action = {}) => {
    console.log(state);

    switch (action.type) {

        case ADD_PRODUCT:
            //on doit retourner un nouveau state
            return {
                ...state,
                prixFinal: state.price,
                products: [...state.products, action.products],
                quantite: state.quantite + 1,
            };

        case CONNECT_USER:
            return {
                ...state,
                idDonateur: action.id,
            };
        default:
            return state;
    }
};

export default reducer;






/* import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    DELETE_ALL,
    CONNECT_USER,
    DECONNECT_USER,
    GET_ORDER
} from "../Constants/actions";

// définition de la source de vérité
// création du réducer pour gérer la connexion de l'utilisateur donc si on récupère un id
// gestion du panier d'achat via la sessionStorage (enregistrement de données sur la session ouverte en cours donc le client)

let stateInit;

if (sessionStorage.getItem("basket")) {
    stateInit = JSON.parse(sessionStorage.getItem("basket"));

} else {
    stateInit = {
        // montant du panier
        montant: 0,
        // ajout des produits dans un tableau pour les afficher
        products: [],
        // récupération de l'id de l'utilisateur
        idDonateur: null,

        count: 0,

        selectedProduct: {},
    };
}

const reducer = (state = stateInit, action = {}) => {
    console.log(state);
    //gestion des actions du Reducer
    switch (action.type) {

        case ADD_PRODUCT:
            //on doit retourner un nouveau state
            return {
                ...state,
                montant: state.montant + action.price,
                products: [...state.products, action.products],
                count: state.count + 1,
            };

        case DELETE_PRODUCT:
            let montant = 0;
            let products = [...state.products];
            products.splice(action.prodId, 1);

            for (const prod of products) {
                montant += prod.price;
            }

            return {
                ...state,
                montant: montant,
                products: [...products],
            };



        case DELETE_ALL:
            return {
                ...state,
                montant: 0,
                products: [],
            };

        case CONNECT_USER:
            return {
                ...state,
                idDonateur: action.id,
            };
        case DECONNECT_USER:
            return {
                ...state,
                idDonateur: null,
            };
        default:
            return state;
    }
};



export default reducer;
 */