import React from 'react'
import { useAppDispatch } from '../store/hooks'
import { togglerNavMenu } from '../store/slice'
import iconKey from '../assets/img/icon/key.svg'
import iconInitialization from '../assets/img/icon/initialization.svg'

export const Header: React.FC = () => {
  const dispatch = useAppDispatch()

  const navMenuHandler = () => {
    dispatch(togglerNavMenu(true))
  }

  return (
    <header>
      <div className="logo-wrapper">
        <div
          onClick={navMenuHandler}
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
