import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router';
import {Menu, Tag} from 'antd';
import {MailOutlined, AppstoreOutlined} from '@ant-design/icons';

import {routes} from '../router';
import {globalContext} from "../store";
import style from './Header.module.css';

interface MenuData {
  title: string;
  key: string;
  link: string;
  icon?: React.ReactNode
}

const menus: MenuData[] = [
  {
    title: '首页',
    key: 'home',
    link: '/',
    icon: <MailOutlined/>
  },
  {
    title: '其他',
    key: 'other',
    link: '/other',
    icon: <AppstoreOutlined/>
  },
  {
    title: '用户页',
    key: 'nest_user',
    link: '/nest/user',
    icon: <AppstoreOutlined/>
  },
  {
    title: '测试页1',
    key: 'test1',
    link: '/test1',
    icon: <AppstoreOutlined/>
  },
  {
    title: '测试页2',
    key: 'test2',
    link: '/test2',
    icon: <AppstoreOutlined/>
  },
  {
    title: '测试页3',
    key: 'test3',
    link: '/test3',
    icon: <AppstoreOutlined/>
  },
  {
    title: '测试页4',
    key: 'test4',
    link: '/test4',
    icon: <AppstoreOutlined/>
  }
]

export default function Header() {
  const [current, setCurrent] = useState("home")
  const history = useHistory();
  const {nav, setNav} = useContext(globalContext)

  /**
   * 跳转菜单
   * @param key
   */
  function goto(key: string) {
    setCurrent(key)
    const menu = menus.find(v => v.key === key)

    if (menu && menu.link) {
      history.push(menu.link)
    }
  }

  useEffect(() => {
    const route = routes.find(v => v.path === history.location.pathname)

    if (route) {
      document.title = route.title

      const navIndex = nav.findIndex(v => v.path === history.location.pathname)

      // 如果之前已经有这个路由了
      if (navIndex >= 0) {
        return
      }

      const newNav = [...nav]

      // 如果当前菜单大于 8 个
      // 那么删除前面那个
      if (nav.length >= 5) {
        newNav.splice(0, 1)
      }

      newNav.push({
        title: route.title,
        path: history.location.pathname
      })

      setNav(newNav)
    }
  }, [history.location, nav, setNav])

  return <>
    <Menu className={style.header} onClick={(e) => goto(e.key + "")} selectedKeys={[current]} mode="horizontal">
      {menus.map(v => {
        return <Menu.Item key={v.key} icon={v.icon}>
          {v.title}
        </Menu.Item>
      })}
    </Menu>

    {nav.map(v => {
      return <Tag key={v.path} color={'#108ee9'} onClick={() => history.push(v.path)}>{v.title}</Tag>
    })}
  </>
}
