import Image from 'next/image';
import { FC } from 'react';

export type AvatarProps = {
  src: string;
};

export const Avatar: FC<AvatarProps> = (props) => {
  const { src } = props;

  return <Image className="rounded-full" src={src} alt="Rounded avatar" width="40" height="40" />;
};
