import { SELECT_BILL_TYPE, SELECT_BILL_ID, SELECT_ISSUER_ID } from './../types'

export const selectBillType = (billType: string) => ({
    type: SELECT_BILL_TYPE,
    payload: { billType }
})

export const selectIssuerID = (issuerID: string) => ({
    type: SELECT_ISSUER_ID,
    payload: { issuerID }
})

export const selectBillID = (billID: string) => ({
    type: SELECT_BILL_ID,
    payload: { billID }
})