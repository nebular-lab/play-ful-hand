import { FC, ReactNode } from 'react';

import { Header } from '@/component/common/Header';

export type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <Header isLogin={true} />
      {children}
    </div>
  );
};
