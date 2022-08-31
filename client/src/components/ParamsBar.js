import React from 'react';
import { Table } from 'react-bootstrap';

const ParamsBar = ({ deviceInfos }) => {
  return (
    <Table responsive="sm">
      <tbody>
          {
            deviceInfos.map(deviceInfo => 
            <tr className='fs-6' key={deviceInfo.id}>
                <td>{deviceInfo.title}</td>
                <td>{deviceInfo.description}</td>
            </tr>)
          }
      </tbody>
    </Table>
  );
};

export default ParamsBar;
