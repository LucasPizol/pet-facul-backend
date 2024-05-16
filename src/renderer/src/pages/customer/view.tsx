import { AddCustomerModal } from '@renderer/components/customer/add-customer-modal'
import { GenericTable } from '@renderer/components/generic-table/generic-table'
import { Button, Col, Typography } from 'antd'
import { useMemo } from 'react'
import { DocumentColumn } from './columns/document'
import { EmailColumn } from './columns/email'
import { NameColumn } from './columns/name'
import { PhoneColumn } from './columns/phone'
import { useCustomerModel } from './model'

export const CustomerView = ({
  customers,
  openModal,
  setOpenModal,
  fetchData,
  customerId,
  setCustomerId
}: ReturnType<typeof useCustomerModel>) => {
  const columns = useMemo(() => {
    return [
      ...NameColumn(customers, setCustomerId),
      ...DocumentColumn(customers),
      ...EmailColumn(customers),
      ...PhoneColumn(customers)
    ]
  }, [customers])

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
      <AddCustomerModal fetchData={fetchData} open={openModal} setOpen={setOpenModal} />
      <Typography.Title
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 'bolder',
          color: 'var(--primary-color)',
          padding: 0,
          margin: 0
        }}
      >
        Registro de Tutores
      </Typography.Title>
      <Button type="primary" onClick={() => setOpenModal(!openModal)}>
        + Adicionar tutor
      </Button>

      <GenericTable
        columns={columns}
        data={customers.filter((customer) => !customerId || customer.id === customerId)}
        name="tutores"
      />
    </Col>
  )
}
