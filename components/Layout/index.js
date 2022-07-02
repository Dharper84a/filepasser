import * as React from 'react';

// Components
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

import { Site } from './styles';

const Layout = (props) => {

  return(
    <Site>
      <Header />
      <Content>
        {props.children}
      </Content>
      <Footer />
    </Site>
  )
}

export default Layout;