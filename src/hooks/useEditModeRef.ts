import { MutableRefObject, useRef } from 'react';

export const useEditModeRef = (): {
  editModeRef: MutableRefObject<'one' | 'square'>;
  setEditMode: (value: 'one' | 'square') => void;
} => {
  const editModeRef = useRef<'one' | 'square'>('square');

  const setEditMode = (value: 'one' | 'square') => {
    editModeRef.current = value;
  };

  return { editModeRef, setEditMode };
};
