import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import './searchBar.css';


import { fetchAddressesAction } from '../../action';

export default() => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const fetchAddresses = (address) => dispatch(fetchAddressesAction(address)).then(data=>data)
  
  const onChange = event => {
    setAddress(event.target.value);
  }
  const onSubmit = event => {
    event.preventDefault();
    // ensures the user types in something
    if (address.trim() === "") return;
    fetchAddresses(address)
    setAddress('');
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input type="text"
          name="address"
          placeholder="Search city address"
          value={address}
          onChange={onChange} />
        <button className="search-button" type="submit">Search</button>
      </div>
    </form>
  )
}
