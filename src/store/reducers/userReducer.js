import { createReducer } from "@reduxjs/toolkit";

import userActions from "../actions/userActions";


const initialStore = {

    userData: null,
    token: null

} 


const userReducer = createReducer (initialStore, (builder) => {

    builder. addCase( 
        userActions.login, (state, action) =>{ //state store previo a la modificacion 
         /*crear un nuevo store*/
         const aux = {...state}  //declaramos auxiliar, armas un objeto, se agarra el state,(initialStore) suelta los elementos de adentro y hace copia del estado
         aux.userData= action.payload.user //asigna a userData la accion.payload.user
         aux.token = action.payload.token //asigna a userData la accion.payload.token
         console.log(aux)
         return aux
         
    }).addCase (userActions.logout, (state, action) => {
        return initialStore
    })


})

export default userReducer