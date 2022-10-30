import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MenuNav } from '../menu/Menu'
import { News } from '../../pages/news/News'
import { Header } from '../header/Header'
import { Search } from '../search/Search'

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
