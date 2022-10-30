import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { IListAddresses } from '../../interfaces/interfaces'

export const ListAddresses: React.FC<IListAddresses> = ({ adresses }) => {
  const classAddresses = useAppSelector((state) => state.wrench.listAddresses)

  return (
    <div className={classAddresses}>
      <h2 className="addresses-title">Адреса</h2>
      <ul>
        {adresses.map((address) => {
          return (
            <li className="address" key={address.id}>
              {address.address}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
