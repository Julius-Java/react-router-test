/* eslint-disable no-unused-vars */
import React from 'react'
import Header from "../pages/sharedComponents/Header";
import { Outlet } from 'react-router-dom';


function RootLayout() {
  return (
    <div className="rootLayout">
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout