import React from 'react';
import { Table } from 'react-bootstrap';

const ParamsBar = ({ deviceInfos }) => {
  return (
    <Table responsive="sm">
      <tbody>
          {
            deviceInfos.map(deviceInfo => 
            <tr className='fs-6' key={deviceInfo.id}>
                <td>{deviceInfo.name}</td>
                <td>{deviceInfo.desctiption}</td>
            </tr>)
          }
      </tbody>
    </Table>
  );
};

export default ParamsBar;
