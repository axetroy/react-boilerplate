import React, {PropsWithChildren} from 'react';

import Header from "../component/header"
import Footer from "../component/footer"
import ReuseTab from "../component/reuseTab"

interface Props extends PropsWithChildren<any> {
}

export function MainLayout(prop: Props) {
  return <div {...prop}>
    <Header/>
    <ReuseTab tabs={[]}/>
    <div className="main-content">
      {prop.children}
    </div>
    <Footer/>
  </div>
}
