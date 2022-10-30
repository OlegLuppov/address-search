import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import {IAddress,Iinitialstate} from  '../interfaces/interfaces'



const initialState:Iinitialstate = {
  toggleSettings:true,
  toggleListAddresses:true,
  toggleNavMenu:true,
  navMenu:'nav-wrapper ',
  listAddresses:'addresses-wrapper',
  settings: 'settings',
  settingsProfile:'settings-profile',
  settingsManagement:'financial-management',
  value:'',
  addresses:[],

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
    togglerNavMenu:(state,action:PayloadAction<boolean>) => {
     if(state.toggleNavMenu === action.payload) {
       state.toggleNavMenu = !state.toggleNavMenu
     } 
     else {
       state.toggleNavMenu = true
      } 
      if(!state.toggleNavMenu) {
       state.navMenu = 'nav-wrapper-active'
     } 
     else {
      state.navMenu = 'nav-wrapper'
     }
    },
    changeValue:(state,action:PayloadAction<string>) => {
      state.value = action.payload
    },
    getAddresses: (state,action:PayloadAction<string>) => {
      if(action.payload.length >= 3) {
        state.toggleListAddresses = !state.toggleListAddresses
      } 
      if (!state.toggleListAddresses && action.payload.length) {
        state.listAddresses = 'addresses-wrapper-active'    
      } 
      if (action.payload.length < 3) {
        state.listAddresses = 'addresses-wrapper'
        state.addresses = []
      }
    },
    changeAddresses:(state,action:PayloadAction<IAddress[]>) => {
      state.addresses = action.payload
    }
 
  },
})
export const {togglerRangeBulean,changeValue,getAddresses,changeAddresses,togglerNavMenu} = mySlices.actions
export default mySlices.reducer