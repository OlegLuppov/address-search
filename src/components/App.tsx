import React from 'react'
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom'
import { Header } from './Header'
import { MenuNav } from './Menu'
import { News } from '../pages/HomePage'
import { Search } from './Search'
import path from 'path'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="main-wrapper">
        <MenuNav></MenuNav>
        <Routes>
          <Route element={<News />} path="/" />
          <Route element={<Search />} path="/address" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
