import React from 'react';
import { DefaultButton, PrimaryButton, Text, TextField } from '@fluentui/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state';
import {
  decrease,
  increase,
  incrementByAmount,
} from '../../state/counter/actions';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <DefaultButton
        aria-label="Increase value"
        onClick={() => dispatch(increase())}
      >
        Increment
      </DefaultButton>
      <Text block={true}>{count}</Text>
      <PrimaryButton
        aria-label="Decrease value"
        onClick={() => dispatch(decrease())}
      >
        Decrement
      </PrimaryButton>
      <div
        style={{
          marginTop: '10px',
        }}
      >
        <TextField
          label="Decrease by amount˝"
          type="number"
          onChange={(event) =>
            dispatch(
              incrementByAmount(event.currentTarget.value as unknown as number)
            )
          }
        ></TextField>
      </div>
    </div>
  );
};

export default Counter;
