import { FC } from 'react';
import { Updater, useImmer } from 'use-immer';

export const Test = () => {
  const [test, setTest] = useImmer({ name: 'aa', pass: '' });

  return (
    <>
      <Child name={test.name} setTest={setTest} />
    </>
  );
};
type Props = {
  name: string;
  setTest: Updater<{
    name: string;
    pass: string;
  }>;
};

const Child: FC<Props> = (props) => {
  const { name, setTest } = props;
  const clickHandler = () => {
    setTest((draft) => {
      draft.name = 'b';
    });
  
  };
  return <button onClick={clickHandler}>{name}</button>;
};
