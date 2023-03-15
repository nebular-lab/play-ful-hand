import { Box, Flex } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { Header } from '@/component/common/Header';

export type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <Flex direction="column" height="100vh" overflow={'hidden'}>
      <Box position="sticky" top="0" zIndex="1000" bg="white">
        <Header isLogin={true}  />
      </Box>
      {children}
    </Flex>
  );
};
