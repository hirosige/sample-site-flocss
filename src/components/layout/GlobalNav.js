import React from 'react'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'

const GlobalNav = ({ location }) => (
  <nav className="p-global-nav">
    <ul>
      <li className={`p-global-nav__item ${location.pathname === '/' && 'is-active'}`}><Link to='/'>HOME</Link></li>
      <li className={`p-global-nav__item ${location.pathname === '/about' && 'is-active'}`}><Link to='/about'>ABOUT</Link></li>
      <li className={`p-global-nav__item ${location.pathname === '/news' && 'is-active'}`}><Link to='/news'>NEWS</Link></li>
      <li className={`p-global-nav__item ${location.pathname === '/topics' && 'is-active'}`}><Link to='/topics'>TOPICS</Link></li>
      <li className={`p-global-nav__item ${location.pathname === '/docs' && 'is-active'}`}><Link to='/docs'>DOCS</Link></li>
      <li className={`p-global-nav__item ${location.pathname === '/blog' && 'is-active'}`}><Link to='/blog'>BLOG</Link></li>
    </ul>
  </nav>
)

export default withRouter(GlobalNav)
