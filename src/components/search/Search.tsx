import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { InputField } from '../input_field/InputField'
import { ListAddresses } from '../list_addresses/ListAddresses'

export const Search: React.FC = () => {
  const addresses = useAppSelector((state) => state.wrench.addresses)
  return (
    <div className="search-wrapper">
      <InputField></InputField>
      <ListAddresses adresses={addresses}></ListAddresses>
    </div>
  )
}
