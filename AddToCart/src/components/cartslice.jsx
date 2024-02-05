import { createSlice } from "@reduxjs/toolkit";


const cartslice = createSlice(
    {
        name: "AddItem",
        initialState: {
            Mquantity: [],Kquantity:[],Hquantity:[]
        },
        reducers: {
            Mouse(state, action) {
                console.log(action)
                console.log(action.payload.number)
                state.Mquantity = action.payload.number
            },
            Keyboard(state, action) {
                console.log(action)
                console.log(action.payload.number)
                state.Kquantity = action.payload.number
            },
            Hdd(state, action) {
                console.log(action)
                console.log(action.payload.number)
                state.Hquantity = action.payload.number
            }
        }

    }
)
export default cartslice
export const cartsliceActions = cartslice.actions
