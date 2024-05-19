import { GenericTable } from '@renderer/components/generic-table/generic-table'
import { AddPaymentModal } from '@renderer/components/payment/add-payment-modal'
import { UpdatePaymentModal } from '@renderer/components/payment/update-payment-modal'
import { Button, Col, Typography } from 'antd'
import { useMemo } from 'react'
import { ActionsColumn } from './columns/actions'
import { DeadlineColumn } from './columns/deadline'
import { DescriptionColumn } from './columns/description'
import { PaidAtColumn } from './columns/paid-at'
import { DaysColumn } from './columns/prev'
import { SituationColumn } from './columns/situation'
import { ValueColumn } from './columns/value'
import { usePaymentsModel } from './model'

export const PaymentView = ({
  payments,
  openModal,
  setOpenModal,
  openPaidModal,
  setOpenPaidModal,
  fetchData,
  selectedId,
  setSelectedId,
  deletePayment,
  contextHolder
}: ReturnType<typeof usePaymentsModel>) => {
  const columns = useMemo(() => {
    return [
      ...DescriptionColumn(payments),
      ...SituationColumn(),
      ...ValueColumn(),
      ...DeadlineColumn(),
      ...PaidAtColumn(),
      ...DaysColumn(),
      ...ActionsColumn({
        onClick: (id: string) => {
          setSelectedId(id)
          setOpenPaidModal(true)
        },
        deletePayment
      })
    ]
  }, [payments])

  if (false) {
    fetchData()
  }

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
      {contextHolder}
      <AddPaymentModal fetchData={fetchData} open={openModal} setOpen={setOpenModal} />
      <UpdatePaymentModal
        fetchData={fetchData}
        open={openPaidModal}
        setOpen={setOpenPaidModal}
        id={selectedId}
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
        Contas a pagar
      </Typography.Title>
      <Button type="primary" onClick={() => setOpenModal(!openModal)}>
        + Adicionar conta
      </Button>

      <GenericTable columns={columns} data={payments} name="pagamentos" />
    </Col>
  )
}
