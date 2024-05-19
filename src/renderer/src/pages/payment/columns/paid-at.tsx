import { IPaymentModel } from '@renderer/interfaces/payment'
import { formatDate } from '@renderer/utils/format-date'
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

        return <span>{formatDate(record.paidAt).toLocaleDateString('pt-br')}</span>
      }
    }
  ]
}
