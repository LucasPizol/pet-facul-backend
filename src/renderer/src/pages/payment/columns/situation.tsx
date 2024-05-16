import { IPaymentModel } from '@renderer/interfaces/payment'
import { Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'

export const SituationColumn = (): ColumnsType<IPaymentModel> => {
  return [
    {
      title: 'Produto',
      dataIndex: 'product',
      key: 'product',
      filters: [
        {
          text: 'PAGO',
          value: 'PAGO'
        },
        {
          text: 'ATRASADO',
          value: 'ATRASADO'
        },
        {
          text: 'A VENCER',
          value: 'A VENCER'
        }
      ],
      onFilter: (value, record) => {
        const situation = () => {
          if (new Date(record.createdAt) < new Date() && !record.hasPaid) return 'ATRASADO'
          if (new Date(record.createdAt) >= new Date() && !record.hasPaid) return 'A VENCER'
          return 'PAGO'
        }

        return value === situation()
      },
      filterSearch: true,

      render: (_, record) => {
        const today = new Date()
        const [year, month, day] = record.deadline.split('T')[0].split('-')

        const deadline = new Date(Number(year), Number(month), Number(day))

        const situation = () => {
          if (
            deadline < new Date(today.getFullYear(), today.getMonth(), today.getDate()) &&
            !record.hasPaid
          )
            return { label: 'ATRASADO', color: 'red' }
          if (
            deadline >= new Date(today.getFullYear(), today.getMonth(), today.getDate()) &&
            !record.hasPaid
          )
            return { label: 'A VENCER', color: 'yellow' }
          return { label: 'PAGO', color: 'green' }
        }

        return <Tag color={situation().color}>{situation().label}</Tag>
      }
    }
  ]
}
