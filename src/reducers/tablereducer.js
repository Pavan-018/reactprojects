const initialState={
    table_num  : null
}
export default function tablereducer(state=initialState, action){
   const {type,payload} = action;
   switch(type){
    case "SetTableNum":
        return{...state, table_num: payload}
   
   case "ResetTableNum":
        return{...state, table_num: null}
    
    default:
        return state

   }

}