import  { FETCH_POST } from '../actions';
import  { CREATE_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_POST:        
            return _.mapKeys(action.payload.data, 'id');
        // case CREATE_POST:
        //     return
        default:
            return state;
    }
}