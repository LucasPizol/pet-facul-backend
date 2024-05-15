import { IDonationModel } from '@renderer/interfaces/donation'
import { ColumnsType } from 'antd/es/table'

export const UnitColumn = (data: IDonationModel[]): ColumnsType<IDonationModel> => {
  return [
    {
      title: 'Unidade',
      dataIndex: 'unit',
      key: 'unit',
      filters: Array.from(
        new Set(
          data.map((item) => ({
            text: item.unit,
            value: item.unit
          }))
        )
      ),
      onFilter: (value, record) => record.unit === value,
      render: (_, record) => {
        const { unit } = record

        if (!unit) return null

        return <span>{unit.toUpperCase()}</span>
      }
    }
  ]
}
