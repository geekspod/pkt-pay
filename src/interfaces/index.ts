export interface IBillingType {
    uid: string
    title: string
    icon: any
}


export interface IBillingId {
    uid: string
    title: string
    icon: any
}

export interface IBillingReducer {
    billType: string
    billID: string
    issuerID: string
}

export interface IStore {
    billing: IBillingReducer
}