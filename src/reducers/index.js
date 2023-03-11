import {combineReducers} from 'redux';
import filterreducer from './filterreducer';
import tablereducer from './tablereducer';
import orderreducer from './orderreducer';

const reducer = combineReducers(
    {
        tablereducer : tablereducer,
        filterreducer : filterreducer,
        orderreducer:orderreducer
    }
)
export default reducer;