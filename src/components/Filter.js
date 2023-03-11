import React from 'react';
import { connect} from 'react-redux';
import {setFilterName, resetFilterName} from '../actions';

const Filter = ({filter_name, setFilterName,resetFilterName}) => {
    const list_of_items =["All Items", "Rice Items","Pizza","Cold Drinks","Hot Drinks"];
    //const[filter, setFilter]=useState("All Items");
  return (
    <div>
        <center className='mt-3'>
            <span className='h4'>Filter </span>
            <select name="filter" onChange={e=>setFilterName
            (e.target.value)}>
                {list_of_items.map((item,index)=>(
                    <option value={item} key={index}>{item} </option>
                ))}
            </select>
           
        </center>
    </div>
  )
}
const mapStateToProps = state =>({
    filter_name : state.filterreducer.filter_name
})
export default connect(mapStateToProps,{setFilterName,resetFilterName})(Filter)