import { IDonationModel } from '@renderer/interfaces/donation'
import { ColumnsType } from 'antd/es/table'

export const ProductColumn = (data: IDonationModel[]): ColumnsType<IDonationModel> => {
  const noProductRepeated = Array.from(new Set(data.map((item) => item.product)))

  return [
    {
      title: 'Produto',
      dataIndex: 'product',
      key: 'product',
      filters: noProductRepeated.map((product) => {
        return { text: product, value: product }
      }),
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
