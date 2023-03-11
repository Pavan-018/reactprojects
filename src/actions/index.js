export const setTableNumber = (value) => async dispatch =>{
    dispatch({
        type:"SetTableNum",
        payload:value
    })
}
export const resetTableNumber = () => async dispatch =>{
    dispatch({
        type:"ResetTableNum",
        payload:null
       
    })
}
export const setFilterName = (value) => async dispatch =>{
    dispatch({
        type:"SetFilter",
        payload:value
    })
}
export const resetFilterName = () => async dispatch =>{
    dispatch({
        type:"SetFilter",
        payload:"All Items"
    })
}

export const addorder =(id,name,prize,table_num,url)=> async dispatch=>{
    dispatch({
            type:"AddOrder",
            payload:{
                id:id,
                name:name,
                prize:prize,
                table_num:table_num,
                url:url
            }
    })
}
