import { useMemo, useState } from 'react'
import type { DropdownProps, FormInstance, MenuProps } from 'antd'
import { Dropdown, Form, Input } from 'antd'
import { IDonationModel } from '@renderer/interfaces/donation'

interface ProductFieldProps {
  data: IDonationModel[]
  form: FormInstance
}

export const ProductField = ({ data, form }: ProductFieldProps) => {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log(e.key)
    form.setFieldValue('product', e.key)
    setOpen(false)
  }

  const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen)
    }
  }

  const items = useMemo(() => {
    return Array.from(new Set(data.map(({ product }) => product)))
      .filter((product) => product.toLowerCase().includes(search.toLowerCase()))
      .map((product) => ({
        key: product,
        label: product
      }))
  }, [data, search])

  return (
    <Form.Item
      name="product"
      label="Produto"
      rules={[{ required: true, message: 'Por favor, informe o produto!' }]}
    >
      <Dropdown
        menu={{
          items,
          onClick: handleMenuClick
        }}
        onOpenChange={handleOpenChange}
        open={open}
      >
        <Input
          onFocus={() => handleOpenChange(true, { source: 'trigger' })}
          onBlur={() =>
            setTimeout(() => {
              handleOpenChange(false, { source: 'trigger' })
            }, 100)
          }
          onChange={({ target: { value } }) => {
            form.setFieldValue('product', value)
            setSearch(value)
          }}
          value={form.getFieldValue('product')}
        ></Input>
      </Dropdown>
    </Form.Item>
  )
}
