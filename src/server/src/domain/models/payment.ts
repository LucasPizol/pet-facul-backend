export type IPaymentType = 'debit' | 'credit' | 'pix' | 'money' | 'other'

export interface IPaymentModel {
  id: string
  description: string | null
  value: number
  type: string
  hasDeleted: boolean
  hasPaid: boolean
  createdAt: Date
  paidAt: Date | null
  deletedAt: Date | null
  deadline: Date
}

export interface IAddPaymentModel {
  description: string | null
  value: number
  type: IPaymentType
  deadline: Date
}

export interface IUpdatePaymentModel extends IAddPaymentModel {
  hasPaid: boolean
  hasDeleted: boolean
  paidAt: Date | null
}
