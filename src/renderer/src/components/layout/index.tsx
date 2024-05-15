import { PageLayoutView } from './view'
import { usePageLayout } from './model'

export const PageLayout = ({ children }: { children: JSX.Element }) => {
  return <PageLayoutView {...usePageLayout({ children })} />
}
