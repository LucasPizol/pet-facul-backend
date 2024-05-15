import { IDonationModel } from '@renderer/interfaces/donation'
import { ColumnsType } from 'antd/es/table'

export const DateColumn = (): ColumnsType<IDonationModel> => {
  return [
    {
      title: 'Data',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      render: (_, record) => {
        const { createdAt } = record

        if (!createdAt) return null

        return <span>{new Date(createdAt).toLocaleDateString('pt-br')}</span>
      }
    }
  ]
}
