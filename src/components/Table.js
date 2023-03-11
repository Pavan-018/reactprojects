import React from 'react';
import {connect} from 'react-redux';
import { setTableNumber } from '../actions';

const Table = ({table_num, setTableNumber}) => {
    const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const inActive="btn btn-outline-primary m-2";
    const active = "btn btn-outline-primary m-2 active";
  return (
    <div>
        <center>
            <h4>Please select your table number:</h4>
            {numbers.map((num,index)=>(
                <div style={{display:"inline"}} key={index}>
                    <button className={table_num===num? active: inActive} onClick={()=>setTableNumber(num)}>{num}
                    </button>
                </div>
            ))

            }
        </center>
    </div>
  )
}
const mapStateToProps = state =>(
    {
        table_num : state.tablereducer.table_num
    }
)
export default connect(mapStateToProps,{setTableNumber})(Table)