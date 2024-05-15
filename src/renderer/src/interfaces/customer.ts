export interface ICustomerModel {
    id: string;
    document: string;
    name: string;
    email: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IAddCustomerModel {
    document: string;
    name: string;
    email: string;
    phone: string;
}

export interface ICustomerUniqueParamsModel {
    document?: string;
    id?: string;
}
