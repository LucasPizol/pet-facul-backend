import { GenericTable } from '@renderer/components/generic-table/generic-table'
import { Button, Col, Typography } from 'antd'
import { useMemo } from 'react'
import { DateColumn } from './columns/date'
import { DescriptionColumn } from './columns/description'
import { PaidAtColumn } from './columns/paid-at'
import { SituationColumn } from './columns/situation'
import { ValueColumn } from './columns/value'
import { usePaymentsModel } from './model'

export const PaymentView = ({
  payments,
  openModal,
  setOpenModal,
  fetchData
}: ReturnType<typeof usePaymentsModel>) => {
  const columns = useMemo(() => {
    return [
      ...DescriptionColumn(payments),
      ...SituationColumn(),
      ...ValueColumn(),
      ...DateColumn(),
      ...PaidAtColumn()
    ]
  }, [payments])

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
      {/* <AddDonationModal
        fetchData={fetchData}
        open={openModal}
        setOpen={setOpenModal}
        data={payments}
      /> */}
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

      <GenericTable columns={columns} data={payments} name="pagamentos" />
    </Col>
  )
}
