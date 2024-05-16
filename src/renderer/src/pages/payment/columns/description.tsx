import { IPaymentModel } from '@renderer/interfaces/payment'
import { ColumnsType } from 'antd/es/table'

export const DescriptionColumn = (data: IPaymentModel[]): ColumnsType<IPaymentModel> => {
  const noDescriptionRepeated = Array.from(new Set(data.map((item) => item.description || '')))

  return [
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description',
      filters: noDescriptionRepeated.map((description) => {
        return { text: description, value: description }
      }),
      onFilter: (value, record) => record.description === value,

      filterSearch: true,
      render: (_, record) => {
        const { description } = record

        if (!description) return null

        return <span>{description}</span>
      }
    }
  ]
}
