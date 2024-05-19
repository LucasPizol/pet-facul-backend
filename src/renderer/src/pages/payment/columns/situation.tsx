import { IPaymentModel } from '@renderer/interfaces/payment'
import { formatDate } from '@renderer/utils/format-date'
import { Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'

export const SituationColumn = (): ColumnsType<IPaymentModel> => {
  return [
    {
      title: 'Situação',
      dataIndex: 'situation',
      key: 'situation',
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
        const today = formatDate(new Date().toISOString())
        const deadline = formatDate(record.deadline)

        console.log({ deadline, today })

        const situation = () => {
          if (deadline.getTime() < today.getTime() && !record.hasPaid)
            return { label: 'ATRASADO', color: 'red' }
          if (deadline.getTime() >= today.getTime() && !record.hasPaid)
            return { label: 'A VENCER', color: 'yellow' }
          return { label: 'PAGO', color: 'green' }
        }

        return <Tag color={situation().color}>{situation().label}</Tag>
      }
    }
  ]
}
