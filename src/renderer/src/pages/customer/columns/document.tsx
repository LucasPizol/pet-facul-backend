import { ICustomerModel } from '@renderer/interfaces/customer'
import { ColumnsType } from 'antd/es/table'

export const DocumentColumn = (data: ICustomerModel[]): ColumnsType<ICustomerModel> => {
  return [
    {
      title: 'CPF/CNPJ',
      dataIndex: 'document',
      key: 'document',
      filters: data.map((name) => {
        return { text: name.document, value: name.document }
      }),
      onFilter: (value, record) => record.document === value,
      filterSearch: true,

      render: (_, record) => {
        const { document } = record

        if (!document) return null

        return <span>{document}</span>
      }
    }
  ]
}
