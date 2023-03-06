import { Header } from '@/component/common/Header';
import { FC, ReactNode } from 'react';

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
