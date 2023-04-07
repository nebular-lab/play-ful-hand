import { Box, Flex } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { Header } from '@/component/Header';

export type LayoutProps = {
  children: ReactNode;
  isEditPage?: boolean;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { children,isEditPage } = props;
  return (
    <Flex direction="column" height="100vh" overflow={'hidden'}>
      <Box position="sticky" top="0" zIndex="1000" bg="white">
        <Header isEditPage={isEditPage} />
      </Box>
      {children}
    </Flex>
  );
};
