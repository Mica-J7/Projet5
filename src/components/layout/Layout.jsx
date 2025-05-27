import './layout.scss'
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'

function Layout({ children }) {
  return (
    <>
      <div className="app-container">
        <Header />
        <Main>{children}</Main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
