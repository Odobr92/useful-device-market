import React, { useMemo, useState } from 'react';
import { Card } from 'react-bootstrap';
import '../../../styles/BlueCounter.css'
import CastomButton from '../button/CastomButton';

const BlueCounter = ({ amount, setAmount, limitMin = 1, limitMax = 15, cn = '' }) => {
  const [activeAmountMin, setActiveAmountMin] = useState(false);
  const [activeAmountMax, setActiveAmountMax] = useState(false);

  useMemo(() => {
    amount <= limitMin ? setActiveAmountMin(true) : setActiveAmountMin(false);
    amount >= limitMax ? setActiveAmountMax(true) : setActiveAmountMax(false);
  }, [amount]);

  return (
    <div className={"blueCounter " + cn}>
      <CastomButton
        disabled={activeAmountMin}
        onClick={() => setAmount(amount - 1)}
        className="me-1"
      >
        -
      </CastomButton>
      <Card className="basketDeviceItem_data_amount_ind" border={'primary'}>
        {amount}
      </Card>
      <CastomButton
        disabled={activeAmountMax}
        onClick={() => setAmount(amount + 1)}
        className="ms-1"
      >
        +
      </CastomButton>
    </div>
  );
};

export default BlueCounter;
