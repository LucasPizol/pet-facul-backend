import { CheckOutlined, DeleteOutlined } from '@ant-design/icons'
import { IPaymentModel } from '@renderer/interfaces/payment'
import { Popconfirm, Row } from 'antd'
import { ColumnsType } from 'antd/es/table'

export interface ActionsProps {
  onClick: (id: string) => void
  deletePayment: (id: string) => void
}

export const ActionsColumn = ({
  onClick,
  deletePayment
}: ActionsProps): ColumnsType<IPaymentModel> => {
  return [
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => {
        return (
          <Row style={{ gap: 8 }}>
            <CheckOutlined
              style={{
                color: 'lime',
                fontSize: 20,
                opacity: record.hasPaid ? 0 : 1,
                cursor: record.hasPaid ? 'auto' : 'pointer'
              }}
              onClick={() => {
                record.hasPaid ? null : onClick(record.id)
              }}
            />

            <Popconfirm
              title="Deseja deletar o pagamento?"
              onConfirm={() => deletePayment(record.id)}
            >
              <DeleteOutlined
                style={{
                  color: 'red',
                  fontSize: 20
                }}
              />
            </Popconfirm>
          </Row>
        )
      }
    }
  ]
}
