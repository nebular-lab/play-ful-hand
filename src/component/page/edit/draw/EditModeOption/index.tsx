import { ChangeEventHandler, FC } from 'react';

export type EditModeOptionProps = {
  mode: 'one' | 'square';

  handleChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

export const EditModeOption: FC<EditModeOptionProps> = (props) => {
  const { mode, handleChange } = props;
  return (
    <div>
      <input
        type="radio"
        id={mode}
        name="editMode"
        value={mode}
        className={`peer hidden`}
        onChange={handleChange}
      />
      <label
        htmlFor={mode}
        className={`flex cursor-pointer items-center justify-center rounded-lg border bg-white  text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 `}
      >
        {mode}
      </label>
    </div>
  );
};
