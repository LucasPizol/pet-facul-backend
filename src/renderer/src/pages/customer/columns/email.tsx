import { ICustomerModel } from '@renderer/interfaces/customer'
import { ColumnsType } from 'antd/es/table'

export const EmailColumn = (data: ICustomerModel[]): ColumnsType<ICustomerModel> => {
  return [
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
      filters: data.map((name) => {
        return { text: name.email, value: name.email }
      }),
      onFilter: (value, record) => record.email === value,
      filterSearch: true,

      render: (_, record) => {
        const { email } = record

        if (!email) return null

        return <span>{email}</span>
      }
    }
  ]
}
