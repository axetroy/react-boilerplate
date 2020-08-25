import React, { PropsWithChildren } from "react";

interface ITab {
  key: string;
  name: string;
  path: string;
}

interface IReuseTab extends PropsWithChildren<any> {
  tabs: ITab[];
}

export default function ReuseTab({ tabs }: IReuseTab) {
  return (
    <div>
      {tabs.map((tab) => {
        return <span key={tab.key}>{tab.name}</span>;
      })}
    </div>
  );
}
