import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { map } from 'lodash'
import $ from 'jquery';


import { fetchAddressesAction } from '../../action';

import DisplayItem from '../SearchItem/DisplayItem';

import './searchList.css';

export default () => {
  const dispatch = useDispatch();

  const fetchAddresses = (address, start, rows) => dispatch(fetchAddressesAction(address, start, rows)).then(data => data)

  const [start] = useState(0);
  const [rows, setRows] = useState(20);
  const [searched, setSearched] = useState(false);
  const addresses = useSelector((state) => {
    return state.addresses;
  });

  const numCount = useSelector((state) => {
    return state.addressesCount;
  });
  const loadingState = useSelector((state) => {
    return state.addressLoading
  });

  const searchTerm = useSelector((state) => {
    return state.searchTerm;
  });
  // eslint-disable-next-line
  useEffect(() => {

    if (!loadingState) {
      setRows(rows + 20);
    }
    // eslint-disable-next-line
  }, [addresses])
  const handleClick = (addresses) => {
    setSearched(true);
    console.log($(".down").offset().top)
    fetchAddresses(addresses, start, rows)
      $('html, body').animate({
        scrollTop: $(".down").offset().top
      }, 4000);

  }
  return (
    <>
      {searchTerm.trim() === "" ?
        searched ?
          <h3>Loading...</h3> : <h4>Search results appears here</h4> :
        <div>
          <h3>Search Result for "{searchTerm}" returned {numCount} Addresses</h3>
          {numCount < 1 ? null :
            <div className="addressResult">
              {map(addresses, (doc) => <DisplayItem key={doc.id} address={doc} />)}
            </div>

          }
          <span className="down"></span>
          {numCount > rows ?
            <button className="loadmore" onClick={handleClick.bind(null, searchTerm)}>Load More</button>
            : null}
        </div>
      }
    </>
  )
}
