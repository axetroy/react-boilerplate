import React, { PropsWithChildren } from "react";

import "./Index.less";

interface Prop extends PropsWithChildren<any> {}

function Index(prop: Prop) {
  return (
    <div>
      <h3>Home page</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, purus vitae eleifend tristique, lorem
        magna volutpat orci, et vehicula erat erat nec elit. Aenean posuere nunc ac cursus facilisis. Aenean vel porta
        turpis, ut iaculis justo.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, purus vitae eleifend tristique, lorem
        magna volutpat orci, et vehicula erat erat nec elit. Aenean posuere nunc ac cursus facilisis. Aenean vel porta
        turpis, ut iaculis justo.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, purus vitae eleifend tristique, lorem
        magna volutpat orci, et vehicula erat erat nec elit. Aenean posuere nunc ac cursus facilisis. Aenean vel porta
        turpis, ut iaculis justo.
      </p>
    </div>
  );
}

export default function () {
  return <Index />;
}
