import React from 'react';
import { useDispatch } from 'react-redux';
import $ from 'jquery';

import './searchItem.css'

import { fetchAddressAction } from '../../action';

import DisplayItemDetails from '../Single-Search/DisplayItemDetails'

export default ({ address }) => {
  const dispatch = useDispatch();

  const fetchAddress = (addressId) => dispatch(fetchAddressAction(addressId)).then(data => data)
 
  const handleClickOpen = (addressId) => {
    $('#myModal').css('display', "block");
    fetchAddress(addressId);
  }

  const handleClickClose = () => {
    $('#myModal').css('display', "none");
  }

  return (
    <div className="display-name">
      <span className = "OneResult" onClick={handleClickOpen.bind(null,address.id)}>{address.weergavenaam}</span>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <DisplayItemDetails />
          <span onClick={handleClickClose.bind(null)} className ="close">&times;</span>
        </div>
      </div>
    </div>
  )
}