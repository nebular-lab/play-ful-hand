import { MutableRefObject, useRef } from 'react';

export const useSelectedActionIDRef = (): {
  selectedActionIDRef: MutableRefObject<number>;
  setSelectedActionIDRef: (value: number) => void;
} => {
  const selectedActionIDRef = useRef<number>(2);

  const setSelectedActionIDRef = (value: number) => {
    selectedActionIDRef.current = value;
  };

  return { selectedActionIDRef, setSelectedActionIDRef };
};
