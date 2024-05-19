import { IPaymentModel } from '@renderer/interfaces/payment'
import { formatDate } from '@renderer/utils/format-date'
import { ColumnsType } from 'antd/es/table'

export const DeadlineColumn = (): ColumnsType<IPaymentModel> => {
  return [
    {
      title: 'Vencimento',
      dataIndex: 'deadline',
      key: 'deadline',
      sorter: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      render: (_, record) => {
        return <span>{formatDate(record.deadline).toLocaleDateString('pt-br')}</span>
      }
    }
  ]
}
