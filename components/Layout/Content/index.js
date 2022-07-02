import * as React from 'react';

import { SiteContent } from './styles';

const Content = (props) => {

  return(
    <SiteContent>
      {props.children}
    </SiteContent>
  )
}

export default Content;