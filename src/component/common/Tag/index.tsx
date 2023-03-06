import { FC } from 'react';

export type TagProps = {
  label: string;
};

export const Tag: FC<TagProps> = (props) => {
  const { label } = props;
  return (
    <span className="mr-2 rounded border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 ">
      {label}
    </span>
  );
};
