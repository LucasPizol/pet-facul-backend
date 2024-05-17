import { IDonationModel } from '@renderer/interfaces/donation'
import { Button } from 'antd'
import { ColumnsType } from 'antd/es/table'

export interface ActionsProps {
  onClick: (id: string) => void
}

export const ActionsColumn = ({ onClick }: ActionsProps): ColumnsType<IDonationModel> => {
  return [
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => {
        return <Button onClick={() => onClick(record.id)}></Button>
      }
    }
  ]
}
