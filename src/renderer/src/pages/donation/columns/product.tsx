import { IDonationModel } from '@renderer/interfaces/donation'
import { ColumnsType } from 'antd/es/table'

export const ProductColumn = (data: IDonationModel[]): ColumnsType<IDonationModel> => {
  return [
    {
      title: 'Produto',
      dataIndex: 'product',
      key: 'product',
      filters: Array.from(
        new Set(
          data.map((item) => ({
            text: item.product,
            value: item.product
          }))
        )
      ),
      onFilter: (value, record) => record.product === value,
      filterSearch: true,

      render: (_, record) => {
        const { product } = record

        if (!product) return null

        return <span>{product}</span>
      }
    }
  ]
}
