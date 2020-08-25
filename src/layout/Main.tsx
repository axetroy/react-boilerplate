import React, { PropsWithChildren } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";
import ReuseTab from "../component/ReuseTab";

interface Props extends PropsWithChildren<any> {}

export function MainLayout(prop: Props) {
  return (
    <div {...prop}>
      <Header />
      <ReuseTab tabs={[]} />
      <div className="main-content">{prop.children}</div>
      <Footer />
    </div>
  );
}
