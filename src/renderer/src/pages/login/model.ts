import { useSession } from '@renderer/context/session/useSession'
import { Form } from 'antd'

export const useLoginModel = () => {
  const { user, login, loading } = useSession()
  const [form] = Form.useForm()

  return { user, login, loading, form }
}
