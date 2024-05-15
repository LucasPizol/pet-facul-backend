import { ICustomerModel } from '@renderer/interfaces/customer'
import { ColumnsType } from 'antd/es/table'

export const PhoneColumn = (data: ICustomerModel[]): ColumnsType<ICustomerModel> => {
  return [
    {
      title: 'Telefone',
      dataIndex: 'phone',
      key: 'phone',
      filters: data.map((name) => {
        return { text: name.phone, value: name.phone }
      }),
      onFilter: (value, record) => record.phone === value,
      filterSearch: true,

      render: (_, record) => {
        const { phone } = record

        if (!phone) return null

        return <span>{phone}</span>
      }
    }
  ]
}
