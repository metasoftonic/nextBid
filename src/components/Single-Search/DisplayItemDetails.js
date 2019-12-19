import React from 'react';
import { useSelector } from 'react-redux';
import './singleSearch.css';
export default () => {
  const address = useSelector((state) => {
    return state.address;
  });
  return (
    <>
      {address.length < 1 ?
        <p>Loading</p> :
        <table >
          <thead>
            <tr>
              <th>Woonplaatsnaam</th>
              <th>Weergavenaam</th>
              <th>Gemeentenaam</th>
              <th>Waterschapsnaam</th>
              <th>Postcode</th>
              <th>Straatnaam</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{address.woonplaatsnaam}</td>
              <td>{address.weergavenaam}</td>
              <td>{address.gemeentenaam}</td>
              <td>{address.waterschapsnaam}</td>
              <td>{address.postcode}</td>
              <td>{address.straatnaam}</td>
            </tr>
          </tbody>
          
        </table>
      }
    </>
  )
}
