import React, { useMemo, useState } from 'react';
import { Card } from 'react-bootstrap';
import CastomButton from '../button/CastomButton';
import styles from './BlueCounter.module.scss';

const BlueCounter = ({ amount, setAmount, limitMin = 1, limitMax = 15, ...props }) => {
  const [activeAmountMin, setActiveAmountMin] = useState(false);
  const [activeAmountMax, setActiveAmountMax] = useState(false);

  useMemo(() => {
    amount <= limitMin ? setActiveAmountMin(true) : setActiveAmountMin(false);
    amount >= limitMax ? setActiveAmountMax(true) : setActiveAmountMax(false);
  }, [amount]);

  return (
    <div {...props}>
      <div className={styles.counterContainer}>
      <CastomButton
        disabled={activeAmountMin}
        onClick={() => setAmount(amount - 1)}
        className="me-1"
      >
        -
      </CastomButton>
      <Card className={styles.displayCount}>
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
    </div>
  );
};

export default BlueCounter;
