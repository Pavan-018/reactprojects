import {React,useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { addorder, resetFilterName, resetTableNumber } from '../actions';


const Card = ({filter_name,addorder,table_num}) => {
    const[data, setData]=useState([]);
    const[backup, setBackup] = useState([]);
    useEffect(() => {
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json').then(
            response=>response.json()
        ).then(
            json=>{setData(json.items);
                    setBackup(json.items);
            }
        )
      },[])
      useEffect(()=>{
        if(filter_name!== "All Items"){
            let specific = backup.filter(item=>item.category===filter_name);
            setData(specific);
        }
        else{
            setData(backup);
        }
      },[filter_name])
      const Handler= async (id,name,prize,url)=>{
                if(table_num!==null){
                    await addorder(id,name,prize,table_num,url)
                    await resetTableNumber
                    await resetFilterName
                    alert("Order placed succesfully");
                }
                else{
                    alert("Please select table number");
                }
      }
  return (
    <div>
        <center>
            {data.length>0 ?
            <div className='container'>
                <div className='row'>{data.map((item)=>(
                    <div className='col-md-4' style={{padding:"5px"}} key={item.id}>
                        <div className='card' style={{width:"20rem", padding:"5px",margin:"5px"}}>
                        <img src={item.url} className='card-img-top'/>
                        <div className='card-body'>
                            <h5 className='card-title'>{item.name}</h5>
                            <div className='card-text'>Rs.{item.prize}</div>
                            <button className='btn btn-primary' onClick={()=> Handler(item.id,item.name,item.prize,item.url)}>Order</button>
                        </div>
                        </div>
                    </div>
                ))}
                </div>
            </div> 
            :<div>
                
            </div> }

        </center>
    </div>
  )
}
const mapStateToProps = state =>({
    filter_name : state.filterreducer.filter_name,
    table_num : state.tablereducer.table_num
})
export default connect(mapStateToProps,{addorder})(Card);