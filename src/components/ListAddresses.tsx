import React from 'react'

export interface IAddress {
  id: number
  address: string
}

export interface IListAddresses {
  adresses: IAddress[]
}

export const ListAddresses: React.FC<IListAddresses> = ({ adresses }) => {
  return (
    <div className="addresses-wrapper">
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
