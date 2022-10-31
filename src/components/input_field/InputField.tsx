import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAppDispatch } from '../../store/hooks'
import { getAddresses, changeAddresses } from '../../store/slice'
import searchButton from '../../assets/img/icon/search-wite.svg'
import { IAddress } from '../../interfaces/interfaces'
import { URL_API_BASEPATH, TOKEN } from '../../constants/api_urls'

export const InputField: React.FC = () => {
  const [value, stateValue] = useState('')
  const dispatch = useAppDispatch()
  let arrAddresses: IAddress[] = []

  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    stateValue(e.target.value)
  }

  const requestHendler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (value.length >= 3) {
      dispatch(getAddresses(value))
      e.preventDefault()
      // get an array of addresses
      const MAIN_QUERY = await axios(URL_API_BASEPATH, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Token ${TOKEN}`,
        },

        data: JSON.stringify({
          query: value,
          count: 20,
        }),
      })

      const ARR_ADDRESSES = await MAIN_QUERY.data.suggestions
      //................

      for (let i = 0; i < ARR_ADDRESSES.length; i++) {
        arrAddresses = [
          {
            id: i,
            address: ARR_ADDRESSES[i].value,
          },
          ...arrAddresses,
        ]
      }
    }
    if (value.length === 0) {
      dispatch(getAddresses(value))
      e.preventDefault()
    } else {
      dispatch(getAddresses(value))
      arrAddresses.reverse()
      dispatch(changeAddresses(arrAddresses))
      return
    }
  }

  useEffect(() => {
    if (value.length === 0) {
      dispatch(getAddresses(value))
    }
  }, [value])

  return (
    <div className="input-wrapper">
      <h2 className="search-title">Введите интересующий вас адрес</h2>
      <form>
        <input type="text" value={value} minLength={3} onChange={changeValueHandler} />
        <button onClick={requestHendler}>
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
