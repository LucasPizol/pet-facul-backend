import { Button, Col, Table, Typography } from 'antd'
import { useDonationModel } from './model'
import { useMemo } from 'react'
import { ProductColumn } from './columns/product'
import { UnitColumn } from './columns/unit'
import { ValueColumn } from './columns/value'
import { DateColumn } from './columns/date'
import { AddDonationModal } from '@renderer/components/donation/add-donation-modal'

export const DonationView = ({
  donations,
  openModal,
  setOpenModal,
  fetchData
}: ReturnType<typeof useDonationModel>) => {
  const columns = useMemo(() => {
    return [
      ...ProductColumn(donations),
      ...UnitColumn(donations),
      ...ValueColumn(),
      ...DateColumn()
    ]
  }, [donations])

  return (
    <Col
      span={24}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: 12
      }}
    >
      <AddDonationModal fetchData={fetchData} open={openModal} setOpen={setOpenModal} data={donations}/>
      <Typography.Title
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 'bolder',
          color: 'var(--primary-color)',
          padding: 0,
          margin: 0
        }}
      >
        Histórico de doações
      </Typography.Title>
      <Button type="primary" onClick={() => setOpenModal(!openModal)}>
        + Adicionar doação
      </Button>
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
