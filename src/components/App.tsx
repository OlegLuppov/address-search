import React from 'react'
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom'
import { Header } from './Header'
import { MenuNav } from './Menu'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <MenuNav></MenuNav>
    </BrowserRouter>
  )
}
