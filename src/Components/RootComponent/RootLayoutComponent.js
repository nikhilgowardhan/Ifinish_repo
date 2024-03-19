import React from 'react'
import HeaderComponent from '../Header/HeaderComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../Footer/FooterComponent'

export default function RootLayoutComponent() {
  return (
    <>
        <HeaderComponent />
            <Outlet />
        <FooterComponent />
    </>
  )
}
