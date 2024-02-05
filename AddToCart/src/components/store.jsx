
import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";

export const store1 = configureStore ({

    reducer:{
item:cartslice.reducer

    }
});