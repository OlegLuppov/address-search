
export interface IAddress {
    id: number
    address: string
  }

export interface IListAddresses {
    adresses: IAddress[]
  }

 export interface Iinitialstate {
    toggleSettings:boolean,
    toggleListAddresses:boolean
    listAddresses:string
    settings: string,
    settingsProfile:string,
    settingsManagement:string
    value:string
    addresses:IAddress[]
  }