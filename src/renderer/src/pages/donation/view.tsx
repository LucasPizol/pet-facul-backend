import { Col, Table, Typography } from 'antd'
import { useDonationModel } from './model'
import { useMemo } from 'react'
import { ProductColumn } from './columns/product'
import { UnitColumn } from './columns/unit'
import { ValueColumn } from './columns/value'
import { DateColumn } from './columns/date'

export const DonationView = ({ donations }: ReturnType<typeof useDonationModel>) => {
  const columns = useMemo(() => {
    return [...ProductColumn(donations), ...UnitColumn(donations), ...ValueColumn(), ...DateColumn()]
  }, [donations])

  return (
    <Col span={24}>
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
        bordered
        dataSource={donations}
        columns={columns}
      ></Table>
    </Col>
  )
}
