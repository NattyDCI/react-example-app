import React from 'react';
import MainHeader from "../components/MainHeader";
import { Outlet } from 'react-router-dom';

function RootLayout(children) {
  return (
    <>
        <MainHeader />
        <Outlet/>
    </>
  )
}

export default RootLayout