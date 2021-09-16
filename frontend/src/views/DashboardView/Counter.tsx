import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../app/counter/counterSlice';

const SRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > button {
    margin-left: 4px;
    margin-right: 8px;
  }
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const SValue = styled.div`
  font-size: 78px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2px;
  font-family: 'Courier New', Courier, monospace;
`;

const STextbox = styled.input`
  font-size: 32px;
  padding: 2px;
  width: 64px;
  text-align: center;
  margin-right: 4px;
`;

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <SRow>
        <Button ariaLabel="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </Button>
        <SValue>{count}</SValue>
        <Button ariaLabel="Increment value" onClick={() => dispatch(increment())}>
          +
        </Button>
      </SRow>
      <SRow>
        <STextbox
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <Button ariaLabel="Add Amount" onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </Button>
        <Button ariaLabel="Add Async" onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </Button>
        <Button ariaLabel="Add If Odd" onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </Button>
      </SRow>
    </div>
  );
}
