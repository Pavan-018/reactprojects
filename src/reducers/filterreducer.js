const initialState={
    filter_name  : "All Items"
}
export default function filterreducer(state=initialState, action){
   const {type,payload} = action;
   switch(type){
    case "SetFilter":
        return{...state, filter_name: payload}
   
   case "ResetTableNum":
        return{...state, filter_name: "All Items"}
    
    default:
        return state

   }

}