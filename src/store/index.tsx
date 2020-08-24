import React, {PropsWithChildren, useState} from "react";

interface UserInfo {
  id: string;
  username: string
}

interface Nav {
  title: string;
  path: string;
}

interface IGlobalState {
  userInfo: UserInfo | null;
  menu: string[];
  nav: Nav[];

  setUserInfo(userInfo: any): void

  setMenu(menu: string[]): void

  setNav(nav: Nav[]): void
}

const initState: IGlobalState = {
  userInfo: null,
  menu: [],
  nav: [],
  setUserInfo(userInfo: UserInfo) {
  },
  setMenu(menu: string[]) {
  },
  setNav(nav: Nav[]) {
  }
}

export const globalContext = React.createContext(initState)

export function Provider(props: PropsWithChildren<any>) {
  const [menu, setMenu] = useState([] as string[])
  const [nav, setNav] = useState([] as Nav[])
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  const state: IGlobalState = {
    menu, setMenu,
    nav, setNav,
    userInfo, setUserInfo
  }

  return <globalContext.Provider value={state}>
    {props.children}
  </globalContext.Provider>
}
