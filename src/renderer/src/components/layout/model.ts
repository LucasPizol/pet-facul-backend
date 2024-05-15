import { useSession } from '@renderer/context/session/useSession'
import { useLocation } from 'react-router-dom'

export const usePageLayout = ({ children }: { children: JSX.Element }) => {
  const location = useLocation()
  const { user } = useSession()

  return { path: location.pathname, children, user }
}
