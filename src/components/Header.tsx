import React from 'react'
import { HandySvg } from 'handy-svg'
import iconKey from '../assets/img/icon/key.svg'
import iconInitialization from '../assets/img/icon/initialization.svg'

export const Header: React.FC = () => {
  return (
    <header>
      <div className="logo-wrapper">
        <div
          className="logo-item"
          style={{
            backgroundImage: `url(${iconKey})`,
          }}
        ></div>
        <h1 className="title-item">Wrench CRM</h1>
      </div>
      <div className="initialization-wrapper">
        <div
          className="icon-initialization"
          style={{
            backgroundImage: `url(${iconInitialization})`,
          }}
        ></div>
        <h2 className="initialization">Имя Фамилия</h2>
      </div>
    </header>
  )
}
