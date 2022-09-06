import React, { useMemo, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import '../../../styles/BlueCounter.css'

const BlueCounter = ({ amount, setAmount, limitMin = 1, limitMax = 15, cn = '' }) => {
  const [activeAmountMin, setActiveAmountMin] = useState(false);
  const [activeAmountMax, setActiveAmountMax] = useState(false);

  useMemo(() => {
    amount <= limitMin ? setActiveAmountMin(true) : setActiveAmountMin(false);
    amount >= limitMax ? setActiveAmountMax(true) : setActiveAmountMax(false);
  }, [amount]);

  return (
    <div className={"blueCounter " + cn}>
      <Button
        disabled={activeAmountMin}
        onClick={() => setAmount(amount - 1)}
        className="me-1"
      >
        -
      </Button>
      <Card className="basketDeviceItem_data_amount_ind" border={'primary'}>
        {amount}
      </Card>
      <Button
        disabled={activeAmountMax}
        onClick={() => setAmount(amount + 1)}
        className="ms-1"
      >
        +
      </Button>
    </div>
  );
};

export default BlueCounter;
