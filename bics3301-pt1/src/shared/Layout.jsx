// Layout: the top bar with links to the three questions.
// <Outlet /> is where the page for the current URL appears.
// You do not need to change this file.
import { NavLink, Outlet, useLocation } from 'react-router'
import ErrorBoundary from './ErrorBoundary.jsx'

function Layout() {
  // The current URL: used to clear an error message when you move to another page.
  const { pathname } = useLocation()
  return (
    <>
      <header className="topbar">
        <NavLink to="/" end className="brand">Practical Test 1</NavLink>
        <nav className="nav">
          <NavLink to="/q1">Q1</NavLink>
          <NavLink to="/q2">Q2</NavLink>
          <NavLink to="/q3">Q3</NavLink>
        </nav>
      </header>
      <main className="container">
        {/* If a question crashes, only its page shows the error. */}
        <ErrorBoundary resetKey={pathname}>
          <Outlet />
        </ErrorBoundary>
      </main>
    </>
  )
}

export default Layout
