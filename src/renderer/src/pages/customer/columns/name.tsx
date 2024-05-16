import { ICustomerModel } from '@renderer/interfaces/customer'
import { ColumnsType } from 'antd/es/table'

export const NameColumn = (
  data: ICustomerModel[],
  setCustomerId: React.Dispatch<React.SetStateAction<string | undefined>>
): ColumnsType<ICustomerModel> => {
  const noNameRepeated = Array.from(new Set(data.map((item) => item.name)))

  return [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      filters: noNameRepeated.map((name) => {
        return { text: name, value: name }
      }),
      onFilter: (value, record) => {
        setCustomerId(undefined)
        return record.name === value
      },
      filterSearch: true,

      render: (_, record) => {
        const { name } = record

        if (!name) return null

        return <span>{name}</span>
      }
    }
  ]
}
