import { IPaymentModel } from '@renderer/interfaces/payment'
import { ColumnsType } from 'antd/es/table'

export const PaidAtColumn = (): ColumnsType<IPaymentModel> => {
  return [
    {
      title: 'Pago em',
      dataIndex: 'paidAt',
      key: 'paidAt',
      sorter: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      render: (_, record) => {
        if (!record.paidAt) return null

        const [year, month, day] = record.paidAt.split('T')[0].split('-')

        const paidAt = new Date(Number(year), Number(month), Number(day))

        return <span>{paidAt.toLocaleDateString('pt-br')}</span>
      }
    }
  ]
}
