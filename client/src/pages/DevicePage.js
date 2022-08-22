import React from 'react';
import { useParams } from 'react-router-dom';

const DevicePage = () => {
    const {id} = useParams();
    return (     
        <div>
            DevicePage{id}
        </div>
    );
}

export default DevicePage;