import { FC } from 'react';

export type HorizontalLineProps = {
  width: number;
  height: number;
};

export const HorizontalLine: FC<HorizontalLineProps> = (props) => {
  const { width, height } = props;
  return (
    <svg width={20} height={10}>
      <path d="M0,9 h20" fill="none" stroke="gray" stroke-width="1" />
    </svg>
  );
};
