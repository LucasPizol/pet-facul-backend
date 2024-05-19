import { IPaymentModel } from '@renderer/interfaces/payment'
import { formatDate } from '@renderer/utils/format-date'
import { ColumnsType } from 'antd/es/table'

export const DaysColumn = (): ColumnsType<IPaymentModel> => {
  return [
    {
      title: 'Dias',
      dataIndex: 'days',
      key: 'days',
      sorter: (a, b) => {
        const [year, month, day] = a.deadline.split('T')[0].split('-')
        const [yearB, monthB, dayB] = b.deadline.split('T')[0].split('-')

        return (
          Math.round(
            (new Date().getTime() - new Date(Number(year), Number(month), Number(day)).getTime()) /
              (1000 * 60 * 60 * 24) -
              1
          ) -
          Math.round(
            (new Date().getTime() -
              new Date(Number(yearB), Number(monthB), Number(dayB)).getTime()) /
              (1000 * 60 * 60 * 24) -
              1
          )
        )
      },
      render: (_, record) => {
        if (record.hasPaid && record.paidAt) {
          const date = Math.round(
            (formatDate(record.paidAt).getTime() - formatDate(record.deadline).getTime()) /
              (1000 * 60 * 60 * 24) -
              1
          )

          return <span>{date}</span>
        }

        const date = Math.round(
          (new Date().getTime() - formatDate(record.deadline).getTime()) / (1000 * 60 * 60 * 24)
        )

        return <span>{date}</span>
      }
    }
  ]
}
