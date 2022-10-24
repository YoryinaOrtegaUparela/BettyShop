import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS
} from "../constants/productsConstans";

//En la ejecucuión voy a tener un estado que depende de la respuesta
export const productsReducer = (state = { productos: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                productos: []
            }
        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                productos: action.payload.productos,
                cantidad: action.payload.cantidad
            }
        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
            default:
            return state;
    }

}

