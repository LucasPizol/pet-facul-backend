import { useSession } from '@renderer/context/session/useSession'
import { useLocation, useNavigate } from 'react-router-dom'

export const usePageLayout = ({ children }: { children: JSX.Element }) => {
  const location = useLocation()
  const { user, logout } = useSession()

  const navigate = useNavigate()

  return { path: location.pathname, children, user, logout, navigate }
}
