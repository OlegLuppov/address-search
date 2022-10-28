import React from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { changeValue } from '../store/slice'
import searchButton from '../assets/img/icon/search-wite.svg'

interface metods {
  onClick(e: React.MouseEvent<HTMLButtonElement>): void
}

export const InputField: React.FC<metods> = ({ onClick }) => {
  const value = useAppSelector((state) => state.wrench.value)
  const dispatch = useAppDispatch()

  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeValue(e.target.value))
  }

  return (
    <div className="input-wrapper">
      <h2 className="search-title">Введите интересующий вас адрес</h2>
      <form>
        <input type="text" value={value} minLength={3} onChange={changeValueHandler} />
        <button onClick={onClick}>
          <div
            className="icon-wrapper-search"
            style={{
              backgroundImage: `url(${searchButton})`,
            }}
          ></div>
          <span>Поиск</span>
        </button>
      </form>
    </div>
  )
}
