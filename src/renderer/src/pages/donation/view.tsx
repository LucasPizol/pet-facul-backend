import { Col, Table, Typography } from 'antd'
import { useDonationModel } from './model'
import { useMemo } from 'react'
import { ProductColumn } from './columns/product'
import { UnitColumn } from './columns/unit'
import { ValueColumn } from './columns/value'
import { DateColumn } from './columns/date'

export const DonationView = ({ donations }: ReturnType<typeof useDonationModel>) => {
  const columns = useMemo(() => {
    return [
      ...ProductColumn(donations),
      ...UnitColumn(donations),
      ...ValueColumn(),
      ...DateColumn()
    ]
  }, [donations])

  return (
    <Col span={24} style={{ width: '100%', height: '100%' }}>
      <Typography.Title
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 'bolder',
          color: 'var(--primary-color)'
        }}
      >
        Histórico de doações
      </Typography.Title>
      <Table
        locale={{
          emptyText: 'Nenhum registro encontrado',
          filterSearchPlaceholder: 'Pesquisar',
          filterConfirm: 'OK',
          filterReset: 'Limpar'
        }}
        style={{ height: '77%' }}
        scroll={{ y: 'calc(95vh - 61px - 56px - 39px - 5px)' }}
        bordered
        dataSource={donations}
        columns={columns}
        className="donations-table"
        size="small"
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '20', '50', '100'],
          defaultPageSize: 10,
          responsive: true,

          showTotal: (total) => (
            <span style={{ flex: 1, width: '100%' }}>
              Há registro de <b>{total}</b> doações .
            </span>
          )
        }}
      ></Table>
    </Col>
  )
}
