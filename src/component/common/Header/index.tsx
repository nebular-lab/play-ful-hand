import Link from 'next/link';
import { type FC } from 'react';

import { Avatar } from '../Avatar';
import { Button } from '../Button';
export type HeaderProps = {
  isLogin: boolean;
};

export const Header: FC<HeaderProps> = (props) => {
  const { isLogin } = props;
  return (
    <nav className="sticky top-0 flex h-14 items-center justify-between bg-white px-7">
      <div className="flex items-center justify-between gap-5">
        <div>PLAYFUL HAND</div>
        <Link className="rounded bg-gray-700 text-white hover:bg-gray-500" href="/edit">
          投稿
        </Link>
      </div>

      {isLogin ? (
        <div className="flex gap-3">
          <Avatar src={'https://placehold.jp/40x40.png'} />
          <Button label="新規作成" />
        </div>
      ) : (
        <Button label="login" />
      )}
    </nav>
  );
};
