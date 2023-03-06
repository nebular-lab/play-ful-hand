import { Dispatch, FC, memo, SetStateAction, useState } from 'react';

export const Test = () => {
  const [test, setTest] = useState({ name: 'aa', pass: '' });

  return (
    <>
      {test.name}
      <Child name={test.name} setTest={setTest} />
    </>
  );
};
type Props = {
  name: string;
  setTest: Dispatch<
    SetStateAction<{
      name: string;
      pass: string;
    }>
  >;
};
const Child: FC<Props> = memo(({ name, setTest }) => {
  console.log('child');
  return (
    <button className="w-10 bg-red-500" onClick={() => setTest({ name: 'aa', pass: '' })}>
      {name}
    </button>
  );
});
