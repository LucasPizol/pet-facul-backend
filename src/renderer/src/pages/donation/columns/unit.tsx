import { IDonationModel } from '@renderer/interfaces/donation'
import { ColumnsType } from 'antd/es/table'

export const UnitColumn = (data: IDonationModel[]): ColumnsType<IDonationModel> => {
  const noUnitRepeated = Array.from(new Set(data.map((item) => item.unit)))

  return [
    {
      title: 'Unidade',
      dataIndex: 'unit',
      key: 'unit',
      filters: noUnitRepeated.map((unit) => {
        return { text: unit, value: unit }
      }),
      onFilter: (value, record) => record.unit === value,
      render: (_, record) => {
        const { unit } = record

        if (!unit) return null

        return <span>{unit.toUpperCase()}</span>
      }
    }
  ]
}
