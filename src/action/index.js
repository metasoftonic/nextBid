import axios from "axios";

import { BASE_URL } from "./../constants";
import { addressDetailsUrl,addressUrl } from "./../utilities";

import {
  FETCH_ADDRESS,
  RES_FETCH_ADDRESSES,
} from "./type";



export const fetchAddressesAction = (search, start = 0, rows = 20) => async dispatch => {
  const url = addressUrl(BASE_URL, search, start, rows);
  try {
    let result = await axios({
      method: 'GET',
      url
    }).then(data=>data.data.response);
    result.search = search;
    dispatch({
      type: RES_FETCH_ADDRESSES,
      payload: result
    });
  } catch (e) {
    return false;
  }
};
export const fetchAddressAction = (addressId) => async dispatch => {
  const url = addressDetailsUrl(BASE_URL, addressId);

  try {
    const result = await axios({
      method: 'GET',
      url
    }).then(data=>data.data.response);
    dispatch({
      type: FETCH_ADDRESS,
      payload: result
    });
  } catch (e) {
    return false;
  }
}




