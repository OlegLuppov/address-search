import { createSlice,PayloadAction } from '@reduxjs/toolkit'

interface Iinitialstate {
  toggleSettings:boolean,
  settings: string,
  settingsProfile:string,
  settingsManagement:string
}

const initialState:Iinitialstate = {
  toggleSettings:true,
  settings: 'settings',
  settingsProfile:'settings-profile',
  settingsManagement:'financial-management'
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
 
  },
})
export const {togglerRangeBulean} = mySlices.actions
export default mySlices.reducer