import {
  FETCH_ADDRESS,
  RES_FETCH_ADDRESSES
} from "./../action/type";

const initialState = {
  addresses: [],
  addressesCount: 0,
  addressLoading: true,
  address: {}, 
  searchTerm : ""
};
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case RES_FETCH_ADDRESSES:
      return {
        ...state,
        addresses: payload.docs,
        addressesCount:payload.numFound,
        addressLoading: false,
        searchTerm :payload.search
      }
    case FETCH_ADDRESS:
      return {
        ...state,
        address: payload.docs[0]
        
      }
      
    default: return state;
  }
 
}