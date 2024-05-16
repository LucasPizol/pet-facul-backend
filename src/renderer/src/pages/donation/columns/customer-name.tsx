import { IDonationModel } from '@renderer/interfaces/donation'
import { ColumnsType } from 'antd/es/table'
import { Link } from 'react-router-dom'

export const CustomerNameColumn = (data: IDonationModel[]): ColumnsType<IDonationModel> => {
  const noNameRepeated = Array.from(new Set(data.map((item) => item.customer.name)))

  return [
    {
      title: 'Tutor',
      dataIndex: 'createdAt',
      key: 'createdAt',
      filters: noNameRepeated.map((name) => {
        return { text: name, value: name }
      }),
      onFilter: (value, record) => record.customer.name === value,

      filterSearch: true,
      render: (_, record) => {
        const { customer } = record

        if (!customer) return null

        return <Link to={`/customers?id=${record.customer.id}`}>{customer.name}</Link>
      }
    }
  ]
}
