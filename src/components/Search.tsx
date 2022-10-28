import React from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { InputField } from './InputField'
import { ListAddresses } from './ListAddresses'

export const Search: React.FC = () => {
  const addresses = useAppSelector((state) => state.wrench.addresses)
  return (
    <div className="search-wrapper">
      <InputField
        onClick={(e): void => {
          e.preventDefault()
        }}
      ></InputField>
      <ListAddresses adresses={addresses}></ListAddresses>
    </div>
  )
}
