import Footer from '../Footer'
import Menu from '../navitems/SpeedDial'

const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
      <Menu />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
