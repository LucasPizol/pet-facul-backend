import { Table } from 'antd'

interface GenericTableProps {
  columns: any
  data: any
  name: string
}

export const GenericTable = ({ columns, data, name }: GenericTableProps) => {
  return (
    <Table
      locale={{
        emptyText: 'Nenhum registro encontrado',
        filterSearchPlaceholder: 'Pesquisar',
        filterConfirm: 'OK',
        filterReset: 'Limpar'
      }}
      style={{ height: '77%' }}
      scroll={{ y: 'calc(80vh - 61px - 56px - 39px - 5px)' }}
      bordered
      dataSource={data}
      columns={columns}
      size="small"
      pagination={{
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '20', '50', '100'],
        defaultPageSize: 10,
        responsive: true,

        showTotal: (total) => (
          <span style={{ flex: 1, width: '100%' }}>
            Há registro de <b>{total}</b> {name}.
          </span>
        )
      }}
    ></Table>
  )
}
