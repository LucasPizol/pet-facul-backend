import { AddDonationModal } from '@renderer/components/donation/add-donation-modal'
import { GenericTable } from '@renderer/components/generic-table/generic-table'
import { Button, Col, Typography } from 'antd'
import { useMemo } from 'react'
import { CustomerNameColumn } from './columns/customer-name'
import { DateColumn } from './columns/date'
import { ProductColumn } from './columns/product'
import { UnitColumn } from './columns/unit'
import { ValueColumn } from './columns/value'
import { useDonationModel } from './model'

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
      ...CustomerNameColumn(donations),
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
      <AddDonationModal
        fetchData={fetchData}
        open={openModal}
        setOpen={setOpenModal}
        data={donations}
      />
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

      <GenericTable columns={columns} data={donations} name="doações" />
    </Col>
  )
}
