import { Provider } from 'react-redux'
import { store } from './store'
import Footer from '../Footer'
import Menu from '../navitems/SpeedDial'

const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
      <Provider store={store}>
        <Menu />
        {children}
        <Footer />
      </Provider>
    </div>
  )
}

export default Layout
