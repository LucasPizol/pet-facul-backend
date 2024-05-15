import { useMemo, useState } from 'react'
import type { DropdownProps, FormInstance, MenuProps } from 'antd'
import { Dropdown, Form, Input } from 'antd'
import { IDonationModel } from '@renderer/interfaces/donation'

interface ProductFieldProps {
  data: IDonationModel[]
  form: FormInstance
}

export const UnitField = ({ data, form }: ProductFieldProps) => {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    form.setFieldValue('unit', e.key)
    setOpen(false)
  }

  const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen)
    }
  }

  const items = useMemo(() => {
    return Array.from(new Set(data.map(({ unit }) => unit)))
      .filter((unit) => unit.toLowerCase().includes(search.toLowerCase()))
      .map((unit) => ({
        key: unit,
        label: unit
      }))
  }, [data, search])

  return (
    <Form.Item
      name="unit"
      label="Unidade"
      rules={[{ required: true, message: 'Por favor, informe a unidade!' }]}
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
            form.setFieldValue('unit', value.toUpperCase())
            setSearch(value)
          }}
          value={form.getFieldValue('unit')?.toUpperCase()}
        ></Input>
      </Dropdown>
    </Form.Item>
  )
}
