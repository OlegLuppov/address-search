import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import {IAddress} from '../components/ListAddresses'

interface Iinitialstate {
  toggleSettings:boolean,
  toggleListAddresses:boolean
  settings: string,
  settingsProfile:string,
  settingsManagement:string
  value:string
  addresses:IAddress[]
}

const initialState:Iinitialstate = {
  toggleSettings:true,
  toggleListAddresses:true,
  settings: 'settings',
  settingsProfile:'settings-profile',
  settingsManagement:'financial-management',
  value:'',
  addresses:[]

}



const mySlices = createSlice({
  name: 'wrench',
  initialState,

  reducers: {
   
    togglerRangeBulean:(state,action:PayloadAction<boolean>) => {
     if(state.toggleSettings === action.payload) {

       state.toggleSettings = !state.toggleSettings
     } else {
       state.toggleSettings = true
     } 
     if(!state.toggleSettings) {
      state.settings = 'settings-active'
      state.settingsProfile = 'settings-profile-active'
      state.settingsManagement = 'financial-management-active'
     } else {
      state.settings = 'settings'
      state.settingsProfile = 'settings-profile'
      state.settingsManagement = 'financial-management'
     }
    },
    changeValue:(state,action:PayloadAction<string>) => {
      state.value = action.payload
    }
 
  },
})
export const {togglerRangeBulean,changeValue} = mySlices.actions
export default mySlices.reducer