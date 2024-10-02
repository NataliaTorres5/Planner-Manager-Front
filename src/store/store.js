import {configureStore} from '@reduxjs/toolkit'

const options  = {

    //se configuran los reducers que es el que accede al store
    reducer: {} 


}
const store = configureStore(options)

export default store