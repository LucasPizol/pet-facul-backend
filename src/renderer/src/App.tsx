import { HashRouter } from 'react-router-dom'
import { Routes } from './routes'
import { SessionProvider } from './context/session/useSession'
import { ConfigProvider } from 'antd'
function App(): JSX.Element {
  return (
    <SessionProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#131929'
          }
        }}
      >
        <HashRouter>
          <Routes />
        </HashRouter>
      </ConfigProvider>
    </SessionProvider>
  )
}

export default App
