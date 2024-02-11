import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slice/theme-slice";


export default configureStore({
reducer :{

    theme:themeSlice

}
})