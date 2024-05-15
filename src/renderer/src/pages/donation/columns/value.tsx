import { IDonationModel } from '@renderer/interfaces/donation'
import { ColumnsType } from 'antd/es/table'

export const ValueColumn = (): ColumnsType<IDonationModel> => {
  return [
    {
      title: 'Valor',
      dataIndex: 'value',
      key: 'value',
      render: (_, record) => {
        const { value } = record

        if (!value) return null

        return <span>{value.toFixed(2)}</span>
      }
    }
  ]
}
