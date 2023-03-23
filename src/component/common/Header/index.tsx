import { Avatar, Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import { type FC } from 'react';

import { login, logout } from '@/lib/auth';

export type HeaderProps = {
  isLogin: boolean;
};

export const Header: FC<HeaderProps> = (props) => {
  const { isLogin } = props;
  const handleLogin = () => {
    login().catch((error) => {
      console.error(error);
    });
  };
  const handleLogout = () => {
    logout().catch((error) => {
      console.log(error);
    });
  };
  return (
    <Flex h={14} px={7} alignItems={'center'} justifyContent={'center'} top={0} bg={'blue.50'}>
      <Heading>PLAYFUL HAND</Heading>
      <Spacer />
      {isLogin ? (
        <Flex gap={3}>
          <Avatar src={'https://placehold.jp/40x40.png'} />
          <Button>新規登録</Button>
          <Button onClick={handleLogout}></Button>
        </Flex>
      ) : (
        <Button onClick={handleLogin}>ログイン</Button>
      )}
    </Flex>
  );
};
