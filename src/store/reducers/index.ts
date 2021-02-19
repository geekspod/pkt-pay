import { IBillingReducer } from "../../interfaces"
import { SELECT_BILL_ID, SELECT_BILL_TYPE, SELECT_ISSUER_ID } from "../types"

const initialState: IBillingReducer = {
    billType: '',
    billID: '',
    issuerID: ''
}
export const billingReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SELECT_BILL_TYPE:
            return {...state, ...action.payload }
        case SELECT_BILL_ID:
            return {...state, ...action.payload }
        case SELECT_ISSUER_ID:
            return {...state, ...action.payload }
        default:
            return { ...state }
    }
}