import { useLocation } from 'react-router-dom'

export const usePageLayout = ({ children }: { children: JSX.Element }) => {
  const location = useLocation()

  return { path: location.pathname, children }
}
