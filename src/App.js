import React from 'react'

function App() {
  return (
    <Navbar>
      <NavItem icon="O" />
      <NavItem icon="O" />
      <NavItem icon="O" />
    </Navbar>
  )
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children}</ul>
    </nav>
  )
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  )
}

export default App
