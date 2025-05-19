import '@/styles/layout.scss'
import Header from './Header.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'

function Layout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
