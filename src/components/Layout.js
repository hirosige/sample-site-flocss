import React from 'react'
import Header from './Header'
import Wrapper from './Wrapper'
import Main from './Main'
import Footer from './Footer'
import Sidemenu from './Sidemenu';

const Layout = props => (
  <React.Fragment>
    <Header />
    <Wrapper>
      <Main>
        {props.children}
      </Main>
      <Sidemenu />
    </Wrapper>
    <Footer />
  </React.Fragment>
)

export default Layout