import { IPaymentModel } from '@renderer/interfaces/payment'
import { ColumnsType } from 'antd/es/table'

export const DateColumn = (): ColumnsType<IPaymentModel> => {
  return [
    {
      title: 'Vencimento',
      dataIndex: 'deadline',
      key: 'deadline',
      sorter: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      render: (_, record) => {
        const [year, month, day] = record.deadline.split('T')[0].split('-')

        const deadline = new Date(Number(year), Number(month), Number(day))

        return <span>{deadline.toLocaleDateString('pt-br')}</span>
      }
    }
  ]
}
