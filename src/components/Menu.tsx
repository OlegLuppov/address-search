import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { togglerRangeBulean } from '../store/slice'

import icoHome from '../assets/img/icon/home.svg'
import icoSearch from '../assets/img/icon/search2.svg'
import icoTable from '../assets/img/icon/tabl.svg'
import icoCalendar from '../assets/img/icon/calendar.svg'
import icoCard from '../assets/img/icon/nav.svg'
import icoWidgets from '../assets/img/icon/widgets.svg'
import icoSettings from '../assets/img/icon/settings.svg'
import icoExit from '../assets/img/icon/out.svg'
import icoSettingsProfile from '../assets/img/icon/settings1.svg'
import icoMenedgment from '../assets/img/icon/calculator.svg'

export const MenuNav: React.FC = () => {
  const settings = useAppSelector((state) => state.wrench.settings)
  const settingsProfile = useAppSelector((state) => state.wrench.settingsProfile)
  const settingsManagement = useAppSelector((state) => state.wrench.settingsManagement)
  const dispatch = useAppDispatch()

  const changeClassNameHandler = () => {
    dispatch(togglerRangeBulean(true))
  }

  return (
    <div className="nav-wrapper">
      <h2 className="nav-title">Menu</h2>
      <ul className="list-nav">
        <li>
          <button className="home" type="button">
            {' '}
            <div
              className="ico-home"
              style={{
                backgroundImage: `url(${icoHome})`,
              }}
            ></div>
            <span>Главная</span>
          </button>
        </li>
        <li>
          <button type="button">
            {' '}
            <div
              className="ico-search"
              style={{
                backgroundImage: `url(${icoSearch})`,
              }}
            ></div>
            <span>Поиск адресов</span>
          </button>
        </li>
        <li>
          <button type="button">
            {' '}
            <div
              className="ico-table"
              style={{
                backgroundImage: `url(${icoTable})`,
              }}
            ></div>
            <span>Таблицы</span>
          </button>
        </li>
        <li>
          <button type="button">
            {' '}
            <div
              className="ico-calendar"
              style={{
                backgroundImage: `url(${icoCalendar})`,
              }}
            ></div>
            <span>Календарь</span>
          </button>
        </li>
        <li>
          <button type="button">
            {' '}
            <div
              className="ico-card"
              style={{
                backgroundImage: `url(${icoCard})`,
              }}
            ></div>
            <span>Карты</span>
          </button>
        </li>
        <li>
          <button type="button">
            {' '}
            <div
              className="ico-widgets"
              style={{
                backgroundImage: `url(${icoWidgets})`,
              }}
            ></div>
            <span>Виджеты</span>
          </button>
        </li>
        <li className={settings} onClick={changeClassNameHandler}>
          <button type="button">
            {' '}
            <div
              className="ico-settings"
              style={{
                backgroundImage: `url(${icoSettings})`,
              }}
            ></div>
            <span>Настройки</span>
          </button>
        </li>
        <li className={settingsProfile}>
          <button type="button">
            {' '}
            <div
              className="ico-settings"
              style={{
                backgroundImage: `url(${icoSettingsProfile})`,
              }}
            ></div>
            <span>
              {' '}
              Настройки <br /> профиля
            </span>
          </button>
        </li>
        <li className={settingsManagement}>
          <button type="button">
            <div
              className="ico-settings"
              style={{
                backgroundImage: `url(${icoMenedgment})`,
              }}
            ></div>
            <span>
              {' '}
              Управление <br /> финансами
            </span>
          </button>
        </li>
        <li>
          <button type="button">
            {' '}
            <div
              className="ico-exit"
              style={{
                backgroundImage: `url(${icoExit})`,
              }}
            ></div>
            <span> Выход</span>
          </button>
        </li>
      </ul>
    </div>
  )
}
