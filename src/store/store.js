import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./reducers/userReducer"
const options  = {

    //se configuran los reducers que es el que accede al store
    reducer: {

        user: userReducer


    } 


}
const store = configureStore(options)

export default store